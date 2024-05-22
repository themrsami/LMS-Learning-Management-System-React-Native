import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HorizontalDivider = ({ text }) => {
  return (
    <View style={styles.lineTextContainer}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20, // adjust as needed
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black', // change color as needed
  },
  text: {
    width: 'auto',
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default HorizontalDivider;