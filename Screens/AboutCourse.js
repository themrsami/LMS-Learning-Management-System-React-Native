import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import OverviewContent from './OverviewContent';
import LessonsContent from './LessonsContent';
import ReviewsContent from './ReviewsContent';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const AboutCourse = () => {
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
            <View style={{flex: 1}}>
                <Tab.Navigator
                    initialRouteName="Overview"
                    tabBarOptions={{
                        activeTintColor: 'white',
                        inactiveTintColor: 'black',
                        labelStyle: { fontSize: 18, fontWeight: '400' },
                        indicatorStyle: { backgroundColor: 'transparent' },
                        style: { backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: 50, position: 'absolute' }
                    }}
                    tabBar={({ state, navigation }) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                            {state.routes.map((route, index) => {
                                const isFocused = state.index === index;
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            const event = navigation.emit({
                                                type: 'tabPress',
                                                target: route.key,
                                                canPreventDefault: true,
                                            });

                                            if (!isFocused && !event.defaultPrevented) {
                                                navigation.navigate(route.name);
                                            }
                                        }}
                                        style={{ flex: 1, alignItems: 'center', borderRadius: 20, overflow: 'hidden' }}
                                    >
                                        <View style={{ backgroundColor: isFocused ? 'black' : 'white', padding: 10, borderRadius: 20, }}>
                                            <Text style={{ color: isFocused ? 'white' : 'black' , fontSize: 20,}}>
                                                {route.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    )}
                >
                    <Tab.Screen name="Overview" component={OverviewContent} />
                    <Tab.Screen name="Lessons" component={LessonsContent} />
                    <Tab.Screen name="Reviews" component={ReviewsContent} />
                </Tab.Navigator>
            </View>
        </View>
    );
};

export default AboutCourse;

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
