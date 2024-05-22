import { View, StyleSheet, ScrollView } from 'react-native';
import Reviews from './Components/Reviews';
import ReusableButton from './Components/Button';

const ReviewsContent = () => {
    return (
        <View style={styles.maincontainer}>
            <ScrollView style={styles.container}>
                <Reviews name="Muhammad Arslan" Designation="Student"/>
                <Reviews name="Usman Diljan" Designation="Student"/>
                <Reviews name="Yasir Lashari" Designation="Student"/>
            </ScrollView>
            <ReusableButton
                    buttonStyle={{ backgroundColor: 'black' }} // Custom button style
                    textStyle={{ color: 'white' }}           // Custom text style
                    buttonText="Enroll Now"
                    containerStyle={{marginTop: 20, alignSelf: 'center', position: 'absolute', bottom: 10}}
                />
        </View>
    )
}

export default ReviewsContent

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    videobox: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '25%',
        paddingTop: 40,
        marginTop: 20
    },
    backIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    saveIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
    },
    playIcon: {
        position: 'absolute',
    },
});