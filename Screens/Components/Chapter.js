import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Chapter = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleExpand}>
      <Text style={styles.text}>{props.txt}</Text>
      {expanded && (
        <View style={styles.content}>
          {props.content}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Chapter;

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
    fontSize: 20,
  },
  content: {
    padding: 10,
    backgroundColor: 'lightgrey',
  },
});