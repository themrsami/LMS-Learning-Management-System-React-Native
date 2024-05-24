import { View, StyleSheet, FlatList } from 'react-native';
import Chapter from './Components/Chapter';
import ReusableButton from './Components/Button';
import ChapterDetails from './Components/ChapterDetails';

const chapters = [
  { id: '1', title: 'Chapter 1: What is Graphics Designing?' },
  { id: '2', title: 'Chapter 2: What is Logo Designing?' },
  { id: '3', title: 'Chapter 3: What is Poster Designing?' },
  { id: '4', title: 'Chapter 4: What is Picture Editing?' },
  { id: '5', title: 'Chapter 5: Introduction to Typography' },
  { id: '6', title: 'Chapter 6: Basics of Layout Design' },
  { id: '7', title: 'Chapter 7: Understanding Color Theory' },
  { id: '8', title: 'Chapter 8: Principles of Design' },
  { id: '9', title: 'Chapter 9: Advanced Photo Editing Techniques' },
  { id: '10', title: 'Chapter 10: Designing for Different Media' },
];

const LessonsContent = () => {
  return (
    <View style={styles.container}>
      <FlatList
            data={chapters}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <Chapter txt={item.title} content={index === 0 ? <ChapterDetails /> : null} />
            )}
            />
          <ReusableButton
            buttonStyle={{ backgroundColor: 'black' }} // Custom button style
            textStyle={{ color: 'white' }} // Custom text style
            buttonText="Enroll Now"
            containerStyle={{ marginTop: 20, alignSelf: 'center' }}
          />
    </View>
  );
};

export default LessonsContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});