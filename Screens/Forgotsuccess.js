import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ForgotSuccess = () => {
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <Ionicons name="checkmark-circle" size={300} color="black" />
            <Text style={styles.title}>Password Reset Successful</Text>
            <Text style={styles.description}>Your password has been reset successfully. You can now sign in with your new password.</Text>
            <Pressable onPress={()=> nav.navigate('Signin')} style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default ForgotSuccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        color: '#AEBAC1',
        textAlign: 'center',
        marginTop: 10
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 50,
        marginTop: 30,
        width: '80%' // Increase the width of the button
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});