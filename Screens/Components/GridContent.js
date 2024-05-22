import { StyleSheet, Text, View, ProgressBarAndroid, TouchableOpacity, Dimensions, Touchable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const GridContent = ({ title, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <View style={styles.grid}>
        </View>
        <View style={styles.title}>
            <Text style={{fontSize: 18,}}>{title}</Text>
            <View style={styles.stars}>
                <Ionicons name="star" size={11} color="gold" />
                <Ionicons name="star" size={11} color="gold" />
                <Ionicons name="star" size={11} color="gold" />
                <Ionicons name="star" size={11} color="gold" />
                <Ionicons name="star" size={11} color="gold" />
            </View>
        </View>
        <View style={styles.percentage}>
            <Text style={{color: 'gray'}}>{name}</Text>
            <Text style={{color: 'gray', alignSelf: 'flex-end'}}>45% done</Text>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.45} />
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default GridContent

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.45,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
    },
    grid: {
        width: '90%',
        height: 160,
        borderRadius: 10,
        backgroundColor: 'gray',
        alignSelf: 'center',
    },
    title: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    stars: {
        flexDirection: 'row',
    },
    percentage: {
        paddingHorizontal: 10,
    }
})