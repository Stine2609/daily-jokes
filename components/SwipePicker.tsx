import React, { useState } from 'react';
import { View, StyleSheet, Animated, Modal, ScrollView } from 'react-native';
import { PanGestureHandler, State, GestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import ContentBox from "./ContentBox";
import Text from "./Text";
import NoButton from "./buttons/NoButton";
import YesButton from "./buttons/YesButton";
import ExpandButton from './buttons/ExpandButton';
import colors from './Colors';
import { SCREEN_HEIGHT, TAB_BAR_HEIGHT } from './ScreenView';

export default function SwipePicker() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const translateX = new Animated.Value(0);

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

    const joke = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.nextCard, { opacity: nextCardOpacity }]}>
                <ContentBox title={`Punny Jokes #${currentIndex + 1}`}>
                    <View style={{maxHeight: 150, overflow: "hidden"}}>
                        <Text color={colors.text.contentBox}>{joke}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <NoButton onPress={() => animateCardAway(-200)} />
                        <YesButton onPress={() => animateCardAway(200)} />
                        <ExpandButton onPress={() => setModalVisible(modalVisible)} />
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
                    <ContentBox title={`Punny Jokes #${currentIndex}`}>
                        <View style={{ maxHeight: 150, overflow: "hidden" }}>
                            <Text color={colors.text.contentBox}>
                                {joke}
                            </Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <NoButton onPress={() => animateCardAway(-200)} />
                            <YesButton onPress={() => animateCardAway(200)} />
                            <ExpandButton onPress={() => setModalVisible(true)} />
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
                    <ContentBox title={`Punny Jokes #${currentIndex}`}>
                        <ScrollView style={{maxHeight: SCREEN_HEIGHT - 100}}>
                            <Text color={colors.text.contentBox}>{joke}</Text>
                        </ScrollView>
                        <View style={styles.buttonsContainer}>
                            <NoButton onPress={() => animateCardAway(-200)} />
                            <YesButton onPress={() => animateCardAway(200)} />
                            <ExpandButton onPress={() => setModalVisible(!modalVisible)} />
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
        gap: 20,
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
});
