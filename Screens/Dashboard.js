import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import DashboardIcons from './Components/DashboardIcons'
import Searchbar from './Components/Searchbar'
import Tag from './Components/Tag'
import GridContent from './Components/GridContent'
import { useNavigation } from '@react-navigation/native'

const Dashboard = () => {
  const nav = useNavigation()
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greetings}>Welcome, Usama</Text>
          <DashboardIcons/>
        </View>
        <Searchbar/>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tags}>
          <Tag text="UI/UX" width={100}/>
          <Tag text="Graphics Design" width={140}/>
          <Tag text="Figma" width={90}/>
          <Tag text="Adobe XD" width={120}/>
          <Tag text="Illustrator" width={130}/>
          <Tag text="Photoshop" width={120}/>
          <Tag text="Design" width={90}/>
          <Tag text="Web Design" width={120}/>
      </ScrollView>
        <View style={styles.Watching}>
          <Text style={styles.Watch}>Continue Watching</Text>
          <Text style={styles.See}>See All</Text>
        </View>
        <View style={styles.grids}>
          <GridContent 
              title="Graphic Design" 
              name="BySyedHasnain" 
              onPress={() => nav.navigate("AboutCourseGraphicDesign")}
          />
          <GridContent title="WireFraming" name="By Shoaib Hassan"/>
          <GridContent title="Website Design" name="By Dawar Hanif"/>
          <GridContent title="Video Editing" name="By Ammar Ijaz"/>
          <GridContent title="UI/UX Design" name="By John Doe"/>
          <GridContent title="Mobile App Design" name="By Jane Doe"/>
          <GridContent title="3D Modeling" name="By Alice"/>
          <GridContent title="Animation" name="By Bob"/>
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