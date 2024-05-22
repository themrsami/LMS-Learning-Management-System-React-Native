import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
    const [secure, setSecure] = useState(true);
    const nav = useNavigation();
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                <Pressable onPress={()=> nav.navigate('Home')} style={{marginTop: 30, alignSelf: "flex-start"}}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
                <Text style={styles.resettxt}>Reset Password</Text>
                <Text style={styles.resetdescription}>Please enter your new password</Text>
                <View>
                    <Text style={styles.inputtitle}>New Password</Text>
                    <TextInput 
                        secureTextEntry={secure}
                        style={styles.input} 
                        placeholder="Enter your new password" 
                        placeholderTextColor="#AEBAC1" 
                    />
                    <Pressable onPress={() => setSecure(prevSecure => !prevSecure)} style={styles.icon}>
                        <Ionicons name={secure ? 'eye-off' : 'eye'} size={20} color="black" />
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.inputtitle}>Confirm Password</Text>
                    <TextInput 
                        secureTextEntry={secure}
                        style={styles.input} 
                        placeholder="Confirm your new password" 
                        placeholderTextColor="#AEBAC1" 
                    />
                    <Pressable onPress={() => setSecure(prevSecure => !prevSecure)} style={styles.icon}>
                        <Ionicons name={secure ? 'eye-off' : 'eye'} size={20} color="black" />
                    </Pressable>
                </View>
                <TouchableOpacity style={styles.resetbtn} onPress={()=>nav.navigate("ForgotSuccess")}>
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