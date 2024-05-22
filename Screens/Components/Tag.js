import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Tag = ({ text, width }) => {
  return (
    <Pressable style={[styles.tag, { width }]}>
      <Text style={styles.txt}>{text}</Text>
    </Pressable>
  )
}

export default Tag

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    marginTop: 10,
  },
  txt: {
    color: 'black',
    fontSize: 18,
  },
})