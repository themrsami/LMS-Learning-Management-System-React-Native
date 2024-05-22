import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Tabs = ({ activeTab, onOverviewPress, onLessonsPress, onReviewsPress }) => {
  return (
    <View style={styles.tabs}>
        <Pressable 
            style={activeTab === 'Overview' ? styles.activeTab : null}
            onPress={onOverviewPress}
        >
            <Text style={activeTab === 'Overview' ? styles.activeTabText : styles.tabstxt}>Overview</Text>
        </Pressable>
        <Pressable 
            style={activeTab === 'Lessons' ? styles.activeTab : null}
            onPress={onLessonsPress}
        >
            <Text style={activeTab === 'Lessons' ? styles.activeTabText : styles.tabstxt}>Lessons</Text>
        </Pressable>
        <Pressable 
            style={activeTab === 'Reviews' ? styles.activeTab : null}
            onPress={onReviewsPress}
        >
            <Text style={activeTab === 'Reviews' ? styles.activeTabText : styles.tabstxt}>Reviews</Text>
        </Pressable>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '5%',
        marginTop: 20,
        borderRadius: 20,
    },
    tabstxt: {
        fontWeight: '400',
        fontSize: 18
    },
    activeTab: {
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginLeft: -15,
    },
    activeTabText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18
    }
})