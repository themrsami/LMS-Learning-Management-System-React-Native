import { StyleSheet, Text, View, TextInput, Pressable, Platform, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Inputcomponent from './Components/Inputcomponent';
import PasswordInput from './Components/PasswordInput';
import ConfirmPassword from './Components/ConfirmPassword';
import SocialIcons from './Components/SocialIcons';
import ReusableButton from './Components/Button';
import HorizontalDivider from './Components/HorizontalDivider';

const Signup = () => {
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
                <Text style={styles.signuptxt}>Sign up</Text>
                <Text style={styles.signupdescription}>Please Sign up with your account</Text>
                <View>
                    <Inputcomponent security={false} title="Full Name" placeholder="Enter you full name" />
                </View>
                <View>
                    <Inputcomponent security={false} title="Email Here" placeholder="Enter your Email" />
                </View>
                <View>
                    <PasswordInput title="Password" placeholder="Enter Your Password"/>
                </View>
                <View>
                    <PasswordInput title="Confirm Password" placeholder="Enter Your Confirm Password"/>
                </View>
                <ReusableButton
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Sign Up"
                    onPress={() => nav.navigate('Signup')}
                    containerStyle={{marginTop: 40,}}
                />
                <HorizontalDivider text="Or Sign up with"/>
                <SocialIcons/>
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
    input: {
        backgroundColor: '#DCDCDC',
        width: 350,
        height: 50,
        color: 'black',
        fontSize: 18,
        paddingLeft: 10,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    inputtitle: {
        fontSize: 18,
        marginTop: 20,
    },
    icon: {
        position: 'absolute',
        marginTop: 55,
        marginLeft: 325,
    },
    signinText: {
        marginTop: 30,
        color: '#C0C0C0',
        fontSize: 16,
    }
})
