import { StyleSheet, Pressable, View } from 'react-native'
import {useState} from 'react'
import Inputcomponent from './Inputcomponent'
import { Ionicons } from '@expo/vector-icons';

const ConfirmPassword = () => {
    const [secure, setSecure] = useState(true);
  return (
    <View>
        <Inputcomponent title="Confirm Password" security={secure} placeholder="Enter your Confirm password" />
        <Pressable onPress={() => setSecure(prevSecure => !prevSecure)} style={styles.icon}>
            <Ionicons name={secure ? 'eye-off' : 'eye'} size={20} color="black" />
        </Pressable>
    </View>
  )
}

export default ConfirmPassword

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        marginTop: 55,
        marginLeft: 325,
    }
})