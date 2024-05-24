import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; // Import StyleSheet
import { Ionicons } from '@expo/vector-icons'; // Import Expo Icons

const CustomCard = (props) => {
  return (
    <View style={styles.maincontainer}>
        <View style={styles.container}>
            {/* Image/Icon Placeholder */}
            <Image
                source={require('../../assets/favicon.png')} // Replace with your image URL
                style={styles.image}
            />

            {/* Name and Designation */}
            <View style={styles.textContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.designation}>{props.designation}</Text>
            </View>

            {/* Star Ratings */}
            <View style={styles.ratingContainer}>
                <Ionicons name="star" size={20} color="gold" />
                <Ionicons name="star" size={20} color="gold" />
                <Ionicons name="star" size={20} color="gold" />
                <Ionicons name="star" size={20} color="gold" />
                <Ionicons name="star" size={20} color="gold" />
            </View>
        </View>
        <Text style={styles.loremtxt}>
            {props.Innertxt}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 20,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'lightgrey'
    },
    loremtxt: {
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  designation: {
    fontSize: 14,
    color: 'gray',
  },
  ratingContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});

export default CustomCard;
