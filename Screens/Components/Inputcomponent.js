import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Inputcomponent = (props) => {
  return (
    <View>
      <View>
        <Text style={styles.inputtitle}>{props.title}</Text>
        <TextInput
          secureTextEntry={props.security}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor="#AEBAC1"
          value={props.value}  // Added line
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  )
}

export default Inputcomponent

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#DCDCDC',
    width: 350,
    height: 50,
    color: 'black',
    fontSize: 18,
    paddingLeft: 10,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  inputtitle: {
    fontSize: 18,
    marginTop: 20,
  },
})
