import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chapter = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.txt}</Text>
    </View>
  )
}

export default Chapter

const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        margin: 10,
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
    },
    text: {
        fontSize: 20
    }
})