import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const DashboardIcons = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('Settings pressed')}>
        <Ionicons name="settings" size={30} color="lightgrey" />
      </Pressable>
      <Pressable onPress={() => console.log('Notifications pressed')}>
        <Ionicons name="notifications" size={30} color="lightgrey" />
      </Pressable>
    </View>
  )
}

export default DashboardIcons

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10
  },
})