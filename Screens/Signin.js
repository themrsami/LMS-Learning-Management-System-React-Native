import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Inputcomponent from './Components/Inputcomponent';
import PasswordInput from './Components/PasswordInput';
import SocialIcons from './Components/SocialIcons';
import ReusableButton from './Components/Button';
import { PrimaryText, SecondaryText } from './Components/Text';
import HorizontalDivider from './Components/HorizontalDivider';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = () => {
    const nav = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const credentials = await _retrieveData();
            if (credentials) {
                setEmail(credentials.email || '');
                setPassword(credentials.password || '');
            }
        };
        fetchData();
    }, []);

    const _storeData = async () => {
        try {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
        } catch (error) {
            console.log(error);
        }
    };

    const _retrieveData = async () => {
        try {
            const email = await AsyncStorage.getItem('email');
            const password = await AsyncStorage.getItem('password');
            console.log('Retrieved email:', email);
            console.log('Retrieved password:', password);
            return { email, password };
        } catch (error) {
            console.log(error);
            return { email: '', password: '' };
        }
    };

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User signed in successfully:", user);
            await _storeData();
            nav.navigate('Bottombar');
        } catch (error) {
            console.error("Error during signin:", error);
            setErrorMessage('Email/Password is incorrect.');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Pressable onPress={() => nav.navigate('Home')} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
                <PrimaryText style={styles.signintxt}>Sign In</PrimaryText>
                <SecondaryText>Please Sign in with your account</SecondaryText>
                <View>
                    <Inputcomponent
                        title="Email"
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View>
                    <PasswordInput
                        title="Password"
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Text style={styles.error}>{errorMessage}</Text>
                <Pressable style={styles.forgotbtn} onPress={() => nav.navigate('ResetPassword')}>
                    <SecondaryText>Forgot Password?</SecondaryText>
                </Pressable>
                <ReusableButton
                    buttonStyle={{ backgroundColor: 'black' }}
                    textStyle={{ color: 'white' }}
                    buttonText="Sign In"
                    onPress={handleSignIn}
                    containerStyle={{ marginTop: 40 }}
                />
                <HorizontalDivider text="or Sign in with" />
                <SocialIcons />
                
                <SecondaryText style={styles.signupText}>
                    Don't have an account? <Pressable onPress={() => nav.navigate("Signup")}><Text style={{ color: 'black' }}>Sign Up</Text></Pressable>
                </SecondaryText>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    backButton: {
        marginTop: 50,
        marginLeft: 10,
        alignSelf: "flex-start"
    },
    signintxt: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: "0%",
    },
    signupText: {
        marginTop: 120,
        fontSize: 16,
    },
    error: {
        color: 'red',
        paddingVertical: 10,
    },
});
