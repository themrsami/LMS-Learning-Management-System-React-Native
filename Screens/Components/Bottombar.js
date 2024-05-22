import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import Video from '../Video';
import Chat from '../Chat';
import Notifications from '../Notifications';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Video') {
                        iconName = focused ? 'videocam' : 'videocam-outline';
                    } else if (route.name === 'Chat') {
                        iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    }

                    return <Ionicons name={iconName} size={24} color={focused ? 'black' : 'lightgray'} />;
                },
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: 'flex'
                    },
                    null
                ]
            })}
        >
            <Tab.Screen name="Home" component={Dashboard} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Video" component={Video} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Notifications" component={Notifications} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 10, // Adjust this value to add margin from the bottom
        width: '100%', 
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
});

export default BottomBar;