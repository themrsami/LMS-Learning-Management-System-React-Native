import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from 'firebase/auth';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const nav = useNavigation();
    const resetPassword = async () => {
        const auth = getAuth();
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent successfully.');
            nav.navigate("ForgotSuccess");
        } catch (error) {
            alert('Error sending password reset email: ' + error.message);
        }
    };
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                <Pressable onPress={()=> nav.navigate('Home')} style={{marginTop: 30, alignSelf: "flex-start"}}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
                <Text style={styles.resettxt}>Reset Password</Text>
                <Text style={styles.resetdescription}>Please enter your new password</Text>
                <View>
                    <Text style={styles.inputtitle}>Email</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your email" 
                        placeholderTextColor="#AEBAC1" 
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <TouchableOpacity style={styles.resetbtn} onPress={resetPassword}>
                    <Text style={styles.resetbtntxt}>Reset Password</Text>
                </TouchableOpacity>
                <Text style={{marginTop: 120, color: '#C0C0C0', fontSize: 16,}}>Remember your password? <Pressable onPress={()=>nav.navigate('Signin')}><Text style={{color: 'black'}}>Sign In</Text></Pressable></Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ResetPassword


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    resettxt: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginTop: 20
    },
    resetdescription: {
        fontSize: 16,
        color: '#AEBAC1',
        alignSelf: 'center',
        marginTop: 10
    },
    inputtitle: {
        color: '#AEBAC1',
        fontSize: 16,
        marginTop: 20
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#AEBAC1',
        paddingBottom: 5
    },
    icon: {
        position: 'absolute',
        right: 0,
        bottom: 10
    },
    resetbtn: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 50,
        marginTop: 30
    },
    resetbtntxt: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});