// ReusableButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ReusableButton = ({ containerStyle, buttonStyle, textStyle, buttonText, onPress }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, containerStyle, buttonStyle]} 
            onPress={onPress}
        >
            <Text style={[styles.text, textStyle]}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
});

export default ReusableButton;
