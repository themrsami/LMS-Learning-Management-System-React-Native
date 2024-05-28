import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CreditCardInputs = () => {
  return (
    <View>

        <TextInput placeholder="Card Number" style={styles.input} />
        <TextInput placeholder="Card Holder Name" style={styles.input} />
        <View style={styles.row}>
            <TextInput placeholder="MM/YY" style={[styles.input, {width: "45%"}]} />
            <TextInput placeholder="CVV" style={[styles.input, {width: "45%"}]} />
            </View>
    </View>
    )}

export default CreditCardInputs

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 10,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})