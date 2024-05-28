import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const PaymentCard = (props) => {
  return (
    <View style={styles.container}>
    <Ionicons name={props.icon} size={24} color="black" />
      <Text style={styles.paymenttxt}>{props.text}</Text>
    </View>
  )
}

export default PaymentCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        gap: 10,
    },
    paymenttxt: {
        fontSize: 20,
        marginLeft: 10,
        fontFamily: 'Poppins-Medium',
    }
})