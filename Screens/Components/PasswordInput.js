import { StyleSheet, Pressable, View } from 'react-native'
import { useState } from 'react'
import Inputcomponent from './Inputcomponent'
import { Ionicons } from '@expo/vector-icons';

const PasswordInput = (props) => {
  const [secure, setSecure] = useState(true);
  return (
    <View>
      <Inputcomponent 
        title={props.title} 
        security={secure} 
        placeholder={props.placeholder}
        value={props.value}  // Added line
        onChangeText={props.onChangeText}
      />
      <Pressable onPress={() => setSecure(prevSecure => !prevSecure)} style={styles.icon}>
        <Ionicons name={secure ? 'eye-off' : 'eye'} size={20} color="black" />
      </Pressable>
    </View>
  )
}

export default PasswordInput

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    marginTop: 55,
    marginLeft: 325,
  }
})
