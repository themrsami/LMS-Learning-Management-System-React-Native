import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="lightgrey" />
      <TextInput style={styles.input} placeholder="Search Here" />
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
})