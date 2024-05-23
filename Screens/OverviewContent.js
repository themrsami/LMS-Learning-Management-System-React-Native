import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Tag from './Components/Tag';
import ReusableButton from './Components/Button';
import { useNavigation } from '@react-navigation/native';

const OverviewContent = () => {
    const nav = useNavigation();
  return (
    <View>
      <View style={styles.price}>
        <Text style={styles.pricetxt}>Graphic Design</Text>
        <Text style={styles.pricetxt}>75$</Text>
      </View>
        <View style={styles.author}>
            <Text style={styles.authortxt}>By Syed Hasnain</Text>
            <Text style={styles.authortxt}>Best Value</Text>
        </View>
        <View style={styles.stars}>
            <Ionicons name="star" size={13} color="gold" />
            <Ionicons name="star" size={13} color="gold" />
            <Ionicons name="star" size={13} color="gold" />
            <Ionicons name="star" size={13} color="gold" />
            <Ionicons name="star" size={13} color="gold" />
        </View>
        <View style={styles.infobox}>
            <View style={styles.lecturedetails}>
                <View style={styles.icontxt}>
                    <Ionicons name="book" size={25} color="black" />
                    <Text style={styles.txt}>80+ Lectures</Text>
                </View>
                <View style={styles.icontxt}>
                    <Ionicons name="ribbon" size={25} color="black" />
                    <Text style={styles.txt}>Certificate</Text>
                </View>
            </View>
            <View style={styles.totaltime}>
                <View style={styles.icontxt}>
                    <Ionicons name="time" size={25} color="black" />
                    <Text style={styles.txt}>8 Weeks</Text>
                </View>
                <View style={styles.icontxt}>
                    <Ionicons name="pricetag" size={25} color="black" />
                    <Text style={styles.txt}>10% Off</Text>
                </View>
            </View>
        </View>
        <Text style={{fontSize: 35, paddingLeft: 20, marginTop: 5,}}>Skills</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 5}}>
            <Tag text="Adobe Illustrator" width="150" />
            <Tag text="Adobe Photoshop" width="150" />
            <Tag text="Adobe XD" width="100" />
            <Tag text="Figma" width="70" />
            <Tag text="UI/UX" width="70" />
            <Tag text="Design" width="70" />
            <Tag text="Graphics Design" width="150" />
        </View>
        <ReusableButton
                    onPress={() => nav.navigate('CourseOverview')}
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Enroll Now"
                    containerStyle={{marginTop: 20, alignSelf: 'center'}}
                />
    
    </View>
  )
}

export default OverviewContent

const styles = StyleSheet.create({
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    pricetxt: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    author: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        paddingHorizontal: 20,
    },
    authortxt: {
        fontSize: 16,
        color: 'grey',
    },
    stars: {
        flexDirection: 'row',
        paddingLeft: 20,
        marginTop: 5,
    },
    infobox: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'lightgrey',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 50,
    },
    lecturedetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    totaltime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    icontxt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10
    },
    txt: {
        fontSize: 14,
    }
})