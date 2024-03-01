import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Modal } from 'react-native';
import { PanGestureHandler, State, GestureHandlerStateChangeEvent, ScrollView } from 'react-native-gesture-handler';
import ContentBox from "../layout/ContentBox";
import Text from "../generalUI/Text";
import CircularButton from '../buttons/CircularButton';
import { componentColors, colors } from './Colors';
import { SCREEN_HEIGHT, TAB_BAR_HEIGHT } from '../layout/ScreenView';
import Button from '../buttons/Button';
import { useJokesSearch } from '../../hooks/useJokesSearch';

interface CardProps {
    text: string;
    animateCardAway: (arg0: number) => void;
}

function Card({ text, animateCardAway }: CardProps) {
    return(
        <ContentBox headerColor={colors.green.dark} style={{overflow: "hidden"}}>
            <ScrollView style={{maxHeight: SCREEN_HEIGHT - 250}}>
                <Text shadow={false} color={componentColors.text.contentBox}>
                    {text}
                </Text>
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <CircularButton variant="no" onPress={() => animateCardAway(-200)} />
                <CircularButton variant="superlike" onPress={() => {}} />
                <CircularButton variant="yes" onPress={() => animateCardAway(200)} />
            </View>
        </ContentBox>
    )
}

interface joke {
    user?: {
        profile?: number;
        name?: string;
    };
    userId: string;
    textBody: string;
    position: number;
}

export default function SwipePicker() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateX = new Animated.Value(0);

    const [page, setPage] = useState(1);
    const [criteria, setCriteria] = useState({ pagination: { page: page, page_size: 10 }});

    const fetchedJokes = useJokesSearch(criteria);

    const [jokes, setJokes] = useState<joke[]>([]);

    useEffect(() => {
        if (fetchedJokes) {
            setJokes(prev => [...prev, ...fetchedJokes]);
        }
    }, [fetchedJokes]);

    useEffect(() => {
        onNext()
    }, [currentIndex]);

    const onNext = () => {
        if (currentIndex % 5 == 0) {
            const newCriteria = {
                ...criteria, 
                pagination: { ...criteria.pagination, page: page } 
            };
            setCriteria(newCriteria);
            const nextPage = page + 1;
            setPage(nextPage);
        }
    }

    useEffect(() => {
        // Animation sequence for swiping hint
        const hintAnimation = Animated.sequence([
            Animated.timing(translateX, {
                toValue: -40, // Slightly to the left
                delay: 1000,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(translateX, {
                toValue: 40, // Then slightly to the right
                delay: 500,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(translateX, {
                toValue: 0, // Return to initial position
                delay: 1000,
                duration: 500,
                useNativeDriver: true,
            }),
        ]);

        hintAnimation.start();
    }, []);

    // Controls the opacity of the next card
    const nextCardOpacity = translateX.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp',
    });

    const rotateZ = translateX.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: ['-30deg', '0deg', '30deg'],
        extrapolate: 'clamp',
    });

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: true }
    );

    const onHandlerStateChange = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            const translationX = event.nativeEvent.translationX as number;
            handleSwipe(translationX);
        }
    };

    const handleSwipe = (translationX: number) => {
        if (Math.abs(translationX) > 140) {
            animateCardAway(translationX);
        } else {
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    };

    // Animates the card if a button is pressed
    const animateCardAway = (direction: number) => {
        const toValue = direction > 0 ? 500 : -500;
        Animated.timing(translateX, {
            toValue: toValue,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            translateX.setValue(0);
            setCurrentIndex(currentIndex + 1);
        });
    };

    const joke = "I DONT GIVE A FUCK ABOUT THE FUCKING CODE! i just want to download this stupid fucking application and use it. WHY IS THERE CODE??? MAKE A FUCKING .EXE FILE AND GIVE IT TO ME. these dumbfucks think that everyone is a developer and understands code. well i am not and i don't understand it. I only know to download and install applications. SO WHY THE FUCK IS THERE CODE? make an EXE file and give it to me. STUPID FUCKING SMELLY NERD"

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.nextCard, { opacity: nextCardOpacity }]}>
                <Card text={jokes[currentIndex + 1] ? jokes[currentIndex + 1].textBody : ""} animateCardAway={animateCardAway} />
            </Animated.View>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}>
                <Animated.View style={{
                    transform: [{ translateX: translateX }, { rotateZ: rotateZ }],
                    position: 'absolute',
                    width: '100%',
                }}>
                    <Card text={jokes[currentIndex] ? jokes[currentIndex].textBody : ""} animateCardAway={animateCardAway} />
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },

    nextCard: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
    },

    buttonsContainer: {
        flexDirection: "row",
        gap: 10,
        width: "100%",
        justifyContent: "center"
    },

    closeButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 15,
    },
});