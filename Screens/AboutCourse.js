import { View, StyleSheet, TouchableOpacity, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Tabs from './Components/Tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import OverviewContent from './OverviewContent';
import LessonsContent from './LessonsContent';
import ReviewsContent from './ReviewsContent';

const AboutCourse = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.videobox}>
                <TouchableOpacity style={styles.backIcon} onPress={() => nav.navigate('Dashboard')}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveIcon} onPress={() => {/* Handle save press */}}>
                    <Ionicons name="bookmark-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playIcon} onPress={() => {/* Handle play press */}}>
                    <Ionicons name="play-circle-outline" size={80} color="black" />
                </TouchableOpacity>
            </View>
            <Tabs 
                activeTab={activeTab} 
                onOverviewPress={() => setActiveTab('Overview')} 
                onLessonsPress={() => setActiveTab('Lessons')}
                onReviewsPress={() => setActiveTab('Reviews')}
            />
            {activeTab === 'Overview' && <OverviewContent/>}
            {activeTab === 'Lessons' && <LessonsContent/>}
            {activeTab === 'Reviews' && <ReviewsContent/>}

        </View>
    )
}

export default AboutCourse

const styles = StyleSheet.create({
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