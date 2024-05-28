import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DashboardIcons = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => nav.navigate('Settigns')}>
        <Ionicons name="settings" size={30} color="lightgrey" />
      </Pressable>
      <Pressable onPress={() => nav.navigate('Notifications')}>
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