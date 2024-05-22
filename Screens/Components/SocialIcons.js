import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const SocialIcons = () => {
  return (
    <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-github" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={20} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default SocialIcons

const styles = StyleSheet.create({
    socialIcons: {
        flexDirection: 'row',
        marginTop: 10
    },
    socialButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 5
    },
})