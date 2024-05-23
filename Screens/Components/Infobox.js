import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const Infobox = () => {
  return (
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
  )
}

export default Infobox

const styles = StyleSheet.create({
    infobox: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'lightgrey',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 20,
    },
    lecturedetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    icontxt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10
    },
    txt: {
        fontSize: 14,
    },
    totaltime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
})