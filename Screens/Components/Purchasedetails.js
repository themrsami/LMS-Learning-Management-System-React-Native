import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Purchasedetails = () => {
  return (
    <View style={styles.infobox}>
        <Text style={styles.purchasetxt}>Purchase Details</Text>
        <View style={styles.lecturedetails}>
            <View style={styles.icontxt}>
                <Text style={styles.txt}>Date: 19/03/2024</Text>
            </View>
            <View style={styles.icontxt}>
                <Text style={styles.txt}>Price: 72$</Text>
            </View>
        </View>
        <View style={styles.totaltime}>
            <View style={styles.icontxt}>
                <Text style={styles.txt}>Coupon: 10% Off</Text>
            </View>
            <View style={styles.icontxt}>
                <Text style={styles.txt}>Final Price: 65$</Text>
            </View>
        </View>
    </View>
  )
}

export default Purchasedetails

const styles = StyleSheet.create({
    infobox: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderColor: 'lightgray',
        borderWidth: 1,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 30,
        position: 'relative',
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
        fontSize: 18,
        fontFamily: 'Poppins-Light',

    },
    totaltime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    purchasetxt: {
        position: 'absolute',
        top: -15,
        left: 20,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 5,
        fontSize: 22,
        fontFamily: 'Poppins-Light',

    }
})