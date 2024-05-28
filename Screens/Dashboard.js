import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import DashboardIcons from './Components/DashboardIcons'
import Searchbar from './Components/Searchbar'
import Tag from './Components/Tag'
import GridContent from './Components/GridContent'
import { useNavigation } from '@react-navigation/native'


const Dashboard = () => {
  const nav = useNavigation()
  const gridData = [
    {title: 'Graphic Design', name: 'BySyedHasnain', onPress: () => nav.navigate("AboutCourseGraphicDesign"), id: '1'},
    {title: 'WireFraming', name: 'By Shoaib Hassan', id: '2'},
    {title: 'Website Design', name: 'By Dawar Hanif', id: '3'},
    {title: 'Video Editing', name: 'By Ammar Ijaz', id: '4'},
    {title: 'UI/UX Design', name: 'By John Doe', id: '5'},
    {title: 'Mobile App Design', name: 'By Jane Doe', id: '6'},
    {title: '3D Modeling', name: 'By Alice', id: '7'},
    {title: 'Animation', name: 'By Bob', id: '8'},
  ];
  const tagData = [
    {text: 'UI/UX', width: 100, id: '1'},
    {text: 'Graphics Design', width: 140, id: '2'},
    {text: 'Figma', width: 90, id: '3'},
    {text: 'Adobe XD', width: 120, id: '4'},
    {text: 'Illustrator', width: 130, id: '5'},
    {text: 'Photoshop', width: 120, id: '6'},
    {text: 'Design', width: 90, id: '7'},
    {text: 'Web Design', width: 120, id: '8'},
  ];
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greetings}>Welcome, Usama</Text>
          <DashboardIcons/>
        </View>
        <Searchbar/>
        <FlatList
          data={tagData}
          keyExtractor={item => item.id}
          renderItem={({item}) => 
            <Tag 
              text={item.text} 
              width={item.width}
            />
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tags}
        />
        <View style={styles.Watching}>
          <Text style={styles.Watch}>Continue Watching</Text>
          <Text style={styles.See}>See All</Text>
        </View>
        <View style={styles.grids}>
          <FlatList
            data={gridData}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
              <GridContent 
                title={item.title} 
                name={item.name} 
                onPress={item.onPress}
              />
            }
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  greetings: {
    fontSize: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Watch: {
    fontSize: 20,
    alignSelf: 'center'
  },
  See: {
    fontSize: 15,
    color: 'lightgrey',
    alignSelf: 'center'
  },
  Watching: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  grids: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
})