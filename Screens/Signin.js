import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Inputcomponent from './Components/Inputcomponent';
import PasswordInput from './Components/PasswordInput';
import SocialIcons from './Components/SocialIcons';
import ReusableButton from './Components/Button';
import { PrimaryText, SecondaryText } from './Components/Text';
import HorizontalDivider from './Components/HorizontalDivider';
import firebase from './firebaseconfig'; // Import the firebase configuration

const Signin = () => {
    const nav = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log("User signed in successfully:", user);
                nav.navigate('Bottombar'); // Navigate to the dashboard after successful signin
            })
            .catch(error => {
                console.error("Error during signin:", error);
                Alert.alert("Error", error.message);
            });
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
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <PasswordInput
                        title="Password"
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <Pressable style={styles.forgotbtn} onPress={() => nav.navigate('ResetPassword')}>
                    <SecondaryText>Forgot Password?</SecondaryText>
                </Pressable>
                <ReusableButton
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Sign In"
                    onPress={handleSignIn} // Updated onPress to handle signin
                    containerStyle={{marginTop: 40,}}
                />
                <HorizontalDivider text="or Sign in with" />
                <SocialIcons/>
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
    }
})
