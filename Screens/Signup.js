import React, { useState } from 'react';
import {
    StyleSheet, Text, View, ScrollView, Pressable, KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Inputcomponent from './Components/Inputcomponent';
import PasswordInput from './Components/PasswordInput';
import SocialIcons from './Components/SocialIcons';
import ReusableButton from './Components/Button';
import HorizontalDivider from './Components/HorizontalDivider';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebaseconfig';
import { doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";
import CustomAlert from './Components/CustomAlert';

const Signup = () => {
    const nav = useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('error');
    const [onAlertClose, setOnAlertClose] = useState(null); // New state for callback

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            showAlert('Passwords do not match!', 'error');
            return;
        }

        setLoading(true);
        try {
            // Create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store user details in Firestore with a specified ID
            await setDoc(doc(db, "Users", user.uid), {
                fullName,
                email,
            });

            console.log("User registered successfully:", user);

            // Add a new document with an auto-generated ID in the "Logs" collection
            const logRef = await addDoc(collection(db, "Logs"), {
                action: "User Sign Up",
                userId: user.uid,
                timestamp: new Date()
            });
            console.log("Log entry created with ID:", logRef.id);

            // Retrieve the user document to verify its existence
            const userDocRef = doc(db, "Users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                console.log("User data:", userDocSnap.data());
            } else {
                console.log("No such document!");
            }

            setLoading(false);
            showAlert('You have signed up successfully!', 'success', () => nav.navigate('Signin'));
        } catch (error) {
            console.error("Error during signup:", error);

            let errorMessage = '';
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = "The email address is already in use by another account.";
                    break;
                case 'auth/invalid-email':
                    errorMessage = "The email address is not valid.";
                    break;
                case 'auth/weak-password':
                    errorMessage = "The password is too weak.";
                    break;
                case 'firestore/permission-denied':
                    errorMessage = "Permission denied. Please check your Firestore rules.";
                    break;
                default:
                    errorMessage = error.message;
            }
            showAlert(errorMessage, 'error');
            setLoading(false);
        }
    };

    const showAlert = (message, type, callback) => {
        setAlertMessage(message);
        setAlertType(type);
        setAlertVisible(true);
        setOnAlertClose(() => callback); // Set the callback to state
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
                    buttonText={loading ? "Signing Up..." : "Sign Up"}
                    onPress={handleSignUp} // Updated onPress to handle signup
                    containerStyle={{ marginTop: 40, }}
                />
                <HorizontalDivider text="Or Sign up with" />
                <SocialIcons />
                <Text style={styles.signinText}>
                    Already have an account? <Pressable onPress={() => nav.navigate('Signin')}><Text style={{ color: 'black' }}>Sign In</Text></Pressable>
                </Text>
            </ScrollView>
            <CustomAlert
                isVisible={alertVisible}
                type={alertType}
                message={alertMessage}
                onClose={() => {
                    setAlertVisible(false);
                    if (onAlertClose) onAlertClose();
                }}
            />
        </KeyboardAvoidingView>
    );
};

export default Signup;

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
