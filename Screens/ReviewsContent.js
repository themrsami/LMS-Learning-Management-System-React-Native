import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Reviews from './Components/Reviews';
import ReusableButton from './Components/Button';

const ReviewsContent = () => {

    const reviewsData = [
        {name: 'Muhammad Arslan', Designation: 'Student', Innertxt: 'The course content was excellent, and I learned a lot from it. Highly recommended!', id: '1'},
        {name: 'Usman Diljan', Designation: 'Student', Innertxt: 'I really enjoyed the course. The instructor explained everything clearly, making it easy to understand.', id: '2'},
        {name: 'Yasir Lashari', Designation: 'Student', Innertxt: 'The course material was comprehensive and well-organized. It exceeded my expectations.', id: '3'},
        {name: 'Ali Raza', Designation: 'Teacher', Innertxt: "Thank you for your positive feedback! I'm glad you found the course helpful.", id: '4'},
        {name: 'Zain Ul Abidin', Designation: 'Student', Innertxt: 'The course provided practical insights that I can apply in my work. Great value for money.', id: '5'},
        {name: 'Bilal Ahmed', Designation: 'Student', Innertxt: "I would highly recommend this course to anyone looking to enhance their skills. It's worth every penny.", id: '6'},
      ];

    return (
        <View style={styles.maincontainer}>
            <ScrollView style={styles.container}>
                <FlatList
                    data={reviewsData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <Reviews 
                        name={item.name} 
                        Designation={item.Designation} 
                        Innertxt={item.Innertxt}
                        />
                    }
                    />
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
});