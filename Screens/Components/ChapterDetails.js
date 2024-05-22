import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChapterDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="play-circle-outline" size={30} color="#000" style={styles.icon} />
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur.</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="clipboard-outline" size={30} color="#000" style={styles.icon} />
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur.</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="play-circle-outline" size={30} color="#000" style={styles.icon} />
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur.</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="clipboard-outline" size={30} color="#000" style={styles.icon} />
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%', // Full width
    backgroundColor: 'lightgrey', // Blue background
    borderRadius: 10, // Rounded corners
    padding: 10,
    alignSelf: 'center' // Padding around the text
  },
  row: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center vertically
    marginBottom: 10, // Space between rows
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  text: {
    color: '#000', // Black text color
  },
});

export default ChapterDetails;
