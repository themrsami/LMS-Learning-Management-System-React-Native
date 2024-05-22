import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Inputcomponent from './Components/Inputcomponent';
import PasswordInput from './Components/PasswordInput';
import SocialIcons from './Components/SocialIcons';
import ReusableButton from './Components/Button';
import { PrimaryText, SecondaryText } from './Components/Text';
import HorizontalDivider from './Components/HorizontalDivider';

const Signin = () => {
    const nav = useNavigation();
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
                <SecondaryText>Please Sign in with your accoutnt</SecondaryText>
                <View>
                    <Inputcomponent title="Username" placeholder="Enter your username" />
                </View>
                <View>
                    <PasswordInput title="Password" placeholder="Password"/>
                </View>
                <Pressable style={styles.forgotbtn} onPress={() => nav.navigate('ResetPassword')}>
                    <SecondaryText>Forgot Password?</SecondaryText>
                </Pressable>
                <ReusableButton
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Sign In"
                    onPress={() => nav.navigate('Bottombar')}
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
