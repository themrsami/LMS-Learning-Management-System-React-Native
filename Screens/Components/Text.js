import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PrimaryText = ({ children, style }) => {
  return <Text style={[styles.primary, style]}>{children}</Text>;
};

const SecondaryText = ({ children, style }) => {
  return <Text style={[styles.secondary, style]}>{children}</Text>;
};

export { PrimaryText, SecondaryText };

const styles = StyleSheet.create({
  primary: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "100%",
  },
  secondary: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: 'grey',
  },
});