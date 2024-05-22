import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ReusableButton from './Components/Button';
import { PrimaryText, SecondaryText } from './Components/Text';

const HomeScreen = () => {
    const nav = useNavigation();
  return (
    <View style={styles.container}>
        <ReusableButton
            buttonStyle={{ backgroundColor: 'lightgray' }} // Custom button style
            textStyle={{ color: 'black' }}           // Custom text style
            buttonText="Sign In as Guest"
            onPress={() => nav.navigate('Dashboard')}
            containerStyle={{marginTop: 10, width: 150, alignSelf: 'flex-end', marginRight: 20, height: 40}}
        />
        <PrimaryText>Join It Group to Kick Start Your Lesson</PrimaryText>
        <SecondaryText>Join and Learn from our Top Instructors</SecondaryText>
        <ReusableButton
                buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                textStyle={{ color: 'white' }}           // Custom text style
                buttonText="Sign In"
                onPress={() => nav.navigate('Signin')}
                containerStyle={{marginTop: 50}}
            />
        <ReusableButton
                buttonStyle={{ backgroundColor: 'white' }} // Custom button style
                textStyle={{ color: 'black' }}           // Custom text style
                buttonText="Sign Up"
                onPress={() => nav.navigate('Signup')}
                containerStyle={{marginTop: 10,}}
            />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        alignItems: 'center',
    },
})