import React from 'react';
import { ReactNode } from 'react';
import { Modal as RNModal, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CircularButton from '../buttons/CircularButton';

interface ModalProps {
    children?: ReactNode;
    modalVisible: boolean;
    onRequestClose: () => void;
}

export default function Modal({ children, modalVisible, onRequestClose }: ModalProps) {
    return (
        <RNModal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onRequestClose}>
            {/* Overlay View to capture outside clicks */}
            <TouchableWithoutFeedback onPress={onRequestClose}>
                <View style={styles.fullScreenView}>
                    {/* Prevent onPress from being triggered when modal content is clicked */}
                    <TouchableWithoutFeedback>
                        <View style={styles.modalView}>
                            {children}
                            <View style={styles.closeButton}>
                                <CircularButton variant="no" onPress={onRequestClose} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </RNModal>
    );
}

const styles = StyleSheet.create({
    fullScreenView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
        borderRadius: 20,
        alignItems: "center",
        width: '80%',
    },
    closeButton: {
        position: "absolute",
        right: 14,
        top: 4,
    },
});
