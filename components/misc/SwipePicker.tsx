import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Modal, ScrollView } from 'react-native';
import { PanGestureHandler, State, GestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import ContentBox from "../layout/ContentBox";
import { LinearGradient } from 'expo-linear-gradient';
import Text from "../generalUI/Text";
import CircularButton from '../buttons/CircularButton';
import { componentColors, colors } from './Colors';
import { SCREEN_HEIGHT, TAB_BAR_HEIGHT } from '../layout/ScreenView';
import Button from '../buttons/Button';
import { useJokesSearchSwipe } from '../../hooks/useJokesSearchSwipe';
import { api } from '../../api/api';
import { UserDataManager } from '../../services/userDataManager';

interface joke {
    id: Number;
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
    const [isTextTruncated, setIsTextTruncated] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const translateX = new Animated.Value(0);

    const [page, setPage] = useState(1);
    const [criteria, setCriteria] = useState({ sortBy: "-createTimeStamp", pagination: { page: page, page_size: 10 }});

    const fetchedJokes = useJokesSearchSwipe(criteria);

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
        let swipeDirection = translationX > 0 ? 'right' : 'left';

        if (Math.abs(translationX) > 140) {
            const jokeId = jokes[currentIndex] ? jokes[currentIndex].id : null;
            console.log(jokes[currentIndex]);
            const action = swipeDirection === 'right' ? 'like' : 'dislike';

            if (jokeId) {
                rate(jokeId, action); 
            }

            animateCardAway(translationX);
        } else {
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    };

    const rate = async (jokeId: Number, action: string) => {
        await api("POST", `/joke/rate/${jokeId}/${action}`, undefined, await UserDataManager.getToken());
    }
    

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
            setModalVisible(false);
            // TODO: measure the length of the actual next joke
            // If joke is longer than 150 characters, assume it is truncated (and hope you're right)
            if(jokes[currentIndex]) {
                setIsTextTruncated(jokes[currentIndex].textBody.length >= 150);
            }
        });
    };

    // Opacity for the left (red) overlay
    const leftOverlayOpacity = translateX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    // Opacity for the right (green) overlay
    const rightOverlayOpacity = translateX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const joke = "I DONT GIVE A FUCK ABOUT THE FUCKING CODE! i just want to download this stupid fucking application and use it. WHY IS THERE CODE??? MAKE A FUCKING .EXE FILE AND GIVE IT TO ME. these dumbfucks think that everyone is a developer and understands code. well i am not and i don't understand it. I only know to download and install applications. SO WHY THE FUCK IS THERE CODE? make an EXE file and give it to me. STUPID FUCKING SMELLY NERD"

    // Determine if show full joke button should be shown on mount
    useEffect(() => {
        if(jokes[currentIndex]) {
            setIsTextTruncated(jokes[currentIndex].textBody.length >= 150);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.nextCard, { opacity: nextCardOpacity }]}>
                <ContentBox headerColor={colors.green.dark}>
                    <View style={{maxHeight: 150, overflow: "hidden"}}>
                        <Text numberOfLines={7} shadow={false} color={componentColors.text.contentBox}>{jokes[currentIndex + 1] ? jokes[currentIndex + 1].textBody : ""}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <CircularButton variant="no" onPress={() => {
                            const jokeId = jokes[currentIndex] ? jokes[currentIndex].userId : null; // Make sure this is the correct identifier
                            if (jokeId) {
                                rate(jokes[currentIndex].id, 'dislike'); // Rate as dislike before animating away
                            }
                            animateCardAway(-200); // Animate card to the left for a "no" action
                        }} />
                        <CircularButton variant="superlike" onPress={() => { }} />
                        <CircularButton variant="yes" onPress={() => {
                            const jokeId = jokes[currentIndex] ? jokes[currentIndex].userId : null; // Make sure this is the correct identifier
                            if (jokeId) {
                                rate(jokes[currentIndex].id, 'like'); // Rate as like before animating away
                            }
                            animateCardAway(200); // Animate card to the right for a "yes" action
                        }} />
                    </View>
                </ContentBox>
            </Animated.View>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}>
                <Animated.View style={{
                        transform: [{ translateX: translateX }, { rotateZ: rotateZ }],
                        position: 'absolute',
                        width: '100%',
                    }}>
                    <ContentBox headerColor={colors.green.dark} style={{overflow: "hidden"}}>
                        <Animated.View style={[styles.overlay, styles.leftOverlay, {opacity: leftOverlayOpacity}]}>
                            <LinearGradient
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                                colors={[componentColors.noButton.highlight, 'transparent']}
                                style={{flex: 1}}
                            />
                        </Animated.View>
                        <Animated.View style={[styles.overlay, styles.rightOverlay, {opacity: rightOverlayOpacity}]}>
                            <LinearGradient
                                start={{ x: 1, y: 1 }}
                                end={{ x: 0, y: 1 }}
                                colors={[componentColors.yesButton.highlight, 'transparent']}
                                style={{flex: 1}}
                            />
                        </Animated.View>
                        <View style={{ maxHeight: 150, overflow: "hidden" }}>
                            <Text numberOfLines={7} shadow={false} color={componentColors.text.contentBox}>
                                {jokes[currentIndex] ? jokes[currentIndex].textBody : ""}
                            </Text>
                        </View>
                        {isTextTruncated && (
                            <Button onPress={() => setModalVisible(true)} style={{ alignSelf: "center" }} shadowHeight={8} height={28} width={160} borderRadius={10} variant="play" label="Read full joke" />
                        )}
                        <View style={styles.buttonsContainer}>
                            <CircularButton variant="no" onPress={() => {
                                const jokeId = jokes[currentIndex] ? jokes[currentIndex].userId : null; // Make sure this is the correct identifier
                                if (jokeId) {
                                    rate(jokes[currentIndex].id, 'dislike'); // Rate as dislike before animating away
                                }
                                animateCardAway(-200); // Animate card to the left for a "no" action
                            }} />
                            <CircularButton variant="superlike" onPress={() => { }} />
                            <CircularButton variant="yes" onPress={() => {
                                const jokeId = jokes[currentIndex] ? jokes[currentIndex].userId : null; // Make sure this is the correct identifier
                                if (jokeId) {
                                    rate(jokes[currentIndex].id, 'like'); // Rate as like before animating away
                                }
                                animateCardAway(200); // Animate card to the right for a "yes" action
                            }} />
                        </View>
                    </ContentBox>
                </Animated.View>
            </PanGestureHandler>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.modalView}>
                    <ContentBox headerColor={colors.green.dark}>
                        <ScrollView style={{maxHeight: SCREEN_HEIGHT - 100}}>
                            <Text shadow={false} color={componentColors.text.contentBox}>{jokes[currentIndex] ? jokes[currentIndex].textBody : ""}</Text>
                        </ScrollView>
                        <View style={styles.buttonsContainer}>
                            <CircularButton variant="no" onPress={() => animateCardAway(-200)} />
                            <CircularButton variant="superlike" onPress={() => {}} />
                            <CircularButton variant="yes" onPress={() => animateCardAway(200)} />
                        </View>
                    </ContentBox>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to simulate blur
        marginBottom: TAB_BAR_HEIGHT
    },

    closeButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 15,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '75%',
    },
    leftOverlay: {
        left: 0,
    },
    rightOverlay: {
        right: 0,
    },
});