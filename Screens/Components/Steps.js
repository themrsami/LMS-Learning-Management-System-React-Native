import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const CircleIcon = ({ number }) => (
  <View style={styles.circle}>
    <Text style={styles.circleText}>{number}</Text>
  </View>
);

const Steps = () => {
  return (
    <View style={styles.steps}>
      <View style={styles.icons}>
        <CircleIcon number={1} />
        <View style={styles.line} />
        <CircleIcon number={2} />
        <View style={styles.line} />
        <CircleIcon number={3} />
      </View>
      <View style={styles.txts}>
        <Text style={styles.txt}>Overview</Text>
        <Text style={styles.txt}>Payment Method</Text>
        <Text style={styles.txt}>Confirmation</Text>
      </View>
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  steps: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    width: '100%',
    height: '20%',
    flexDirection: 'column',
    borderRadius: 15,
    marginTop: 20,
    alignSelf: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    alignItems: 'center',
  },
  txts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    fontFamily: 'Poppins-EtraLight',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 45,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 30,
  },
  line: {
    height: 2,
    flex: 1,
    backgroundColor: 'black',
  },
  txt: {
    fontSize: 16,
  },
});