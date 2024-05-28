import {
    StyleSheet, Text, View, TextInput, Pressable, Platform, KeyboardAvoidingView,
    TouchableOpacity, ScrollView, Alert
} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Inputcomponent from './Components/Inputcomponent';
import PasswordInput from './Components/PasswordInput';
import SocialIcons from './Components/SocialIcons';
import ReusableButton from './Components/Button';
import HorizontalDivider from './Components/HorizontalDivider';
import firebase from './firebaseconfig'; // Import the firebase configuration

const Signup = () => {
    const nav = useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match!");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log("User registered successfully:", user);
                nav.navigate('Dashboard'); // Navigate to the dashboard after successful signup
            })
            .catch(error => {
                console.error("Error during signup:", error);
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
                <Text style={styles.signuptxt}>Sign up</Text>
                <Text style={styles.signupdescription}>Please Sign up with your account</Text>
                <View>
                    <Inputcomponent
                        security={false}
                        title="Full Name"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>
                <View>
                    <Inputcomponent
                        security={false}
                        title="Email Here"
                        placeholder="Enter your Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <PasswordInput
                        title="Password"
                        placeholder="Enter Your Password"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View>
                    <PasswordInput
                        title="Confirm Password"
                        placeholder="Enter Your Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>
                <ReusableButton
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Sign Up"
                    onPress={handleSignUp} // Updated onPress to handle signup
                    containerStyle={{ marginTop: 40, }}
                />
                <HorizontalDivider text="Or Sign up with" />
                <SocialIcons />
                <Text style={styles.signinText}>
                    Already have an account? <Pressable onPress={() => nav.navigate('Signin')}><Text style={{ color: 'black' }}>Sign In</Text></Pressable>
                </Text>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Signup

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
    signuptxt: {
        fontSize: 40,
        textAlign: 'center',
    },
    signupdescription: {
        fontSize: 19,
        textAlign: 'center',
        marginTop: 10,
        color: 'grey',
    },
    signinText: {
        marginTop: 30,
        color: '#C0C0C0',
        fontSize: 16,
    }
});
