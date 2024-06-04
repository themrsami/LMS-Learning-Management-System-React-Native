import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';

const CustomAlert = ({ isVisible, type, message, onClose }) => {
    const iconName = type === 'success' ? 'checkmark-circle' : 'alert-circle';
    const iconColor = type === 'success' ? 'green' : 'red';

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.alertContainer}>
                <Ionicons name={iconName} size={48} color={iconColor} />
                <Text style={styles.message}>{message}</Text>
                <Pressable style={styles.button} onPress={onClose}>
                    <Text style={styles.buttonText}>OK</Text>
                </Pressable>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    alertContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomAlert;
