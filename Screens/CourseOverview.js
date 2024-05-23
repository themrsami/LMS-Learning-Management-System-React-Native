import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Steps from './Components/Steps';
import Infobox from './Components/Infobox';
import Purchasedetails from './Components/Purchasedetails';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from './Components/Button';


const CourseOverview = () => {
    const nav = useNavigation();
  return (
    <View style={{flex: 1, position: 'relative'}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <Pressable onPress={() => nav.navigate('AboutCourseGraphicDesign')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
            <Steps />
            <Text style={styles.txt}>Overview</Text>
            <Text style={styles.course}>Course Name : <Text style={styles.coursename}>Graphic Design</Text></Text>
            <Infobox />
            <View style={styles.courseinfo}>
                <Text style={styles.course}>Course Rating : <Text style={styles.boldinfo}>★★★★★</Text></Text>
                <Text style={styles.course}>Course Time : <Text style={styles.boldinfo}>8 Weeks</Text></Text>
                <Text style={styles.course}>Course Trainer : <Text style={styles.boldinfo}>Syed Hasnain</Text></Text>
            </View>
            <Purchasedetails />
            </ScrollView>
            <ReusableButton
                    onPress={() => nav.navigate('CourseOverview')}
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Enroll Now"
                    containerStyle={{marginTop: 20, alignSelf: 'center', position: 'absolute', bottom: 20}}
                />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  txt: {
    fontSize: 35,
    marginVertical: 10,
    marginLeft: 20,
    fontFamily: 'Poppins-Light',
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
export default CourseOverview;
