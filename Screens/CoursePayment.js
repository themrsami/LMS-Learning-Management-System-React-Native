import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Steps from './Components/Steps';
import PaymentCard from './Components/PaymentCard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from './Components/Button';


const CoursePayment = () => {
    const nav = useNavigation();
  return (
    <View style={styles.maincontainer}>
        <View style={styles.container}>
            <Pressable onPress={() => nav.navigate('CourseOverview')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
            <Steps />
            <Text style={styles.txt}>Select Payment Method</Text>
            <PaymentCard text="EasyPaisa" icon="card-outline"/>
            <PaymentCard text="JazzCash" icon="card-outline"/>
            <PaymentCard text="Credit Card" icon="card"/>
        </View>
            <ReusableButton
                    onPress={() => nav.navigate('AddCreditCard')}
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Continue"
                    containerStyle={{marginTop: 20, alignSelf: 'center', position: 'absolute', bottom: 10}}
                />
    </View>
  );
};

const styles = StyleSheet.create({
    maincontainer: {
      flex: 1,
      width: '90%',
      alignSelf: 'center',
  },
  container: {
      flex: 1,
  },
  txt: {
    fontSize: 30,
    marginVertical: 10,
    marginLeft: 20,
    fontFamily: 'Poppins-Medium',
  },
  course: {
    fontSize: 25,
    marginLeft: 20,
    fontWeight: '100',
    fontFamily: 'Poppins-Light',
  },
  coursename: {
    fontFamily: 'Poppins-Medium',
  },
    courseinfo: {
        marginTop: 20,
    },
    boldinfo: {
        fontFamily: 'Poppins-Medium',
        marginLeft: 10,
    },
    backButton: {
        marginTop: 50,
        marginLeft: 10,
        alignSelf: "flex-start"
    },

});
export default CoursePayment;
