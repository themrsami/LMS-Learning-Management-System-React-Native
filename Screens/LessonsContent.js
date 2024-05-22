import { View, StyleSheet, TouchableOpacity, Pressable, Text } from 'react-native';
import Chapter from './Components/Chapter';
import ReusableButton from './Components/Button';
import ChapterDetails from './Components/ChapterDetails';
const LessonsContent = () => {
    return (
        <View style={styles.container}>
            <Chapter txt="Chapter 1: What is Graphics Designing?" />
            <ChapterDetails />
            <Chapter txt="Chapter 2: What is Logo Designing?" />
            <Chapter txt="Chapter 3: What is Poster Designing?" />
            <Chapter txt="Chapter 4: What is Picture Editing?" />
            <ReusableButton
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Enroll Now"
                    containerStyle={{marginTop: 20, alignSelf: 'center'}}
                />
        </View>
    )
}

export default LessonsContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
});