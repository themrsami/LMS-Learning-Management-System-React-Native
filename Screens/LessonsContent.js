import { View, StyleSheet, FlatList } from 'react-native';
import Chapter from './Components/Chapter';
import ReusableButton from './Components/Button';
import ChapterDetails from './Components/ChapterDetails';

const chapters = [
  { id: '1', title: 'Chapter 1: What is Graphics Designing?' },
  { id: '2', title: 'Chapter 2: What is Logo Designing?' },
  { id: '3', title: 'Chapter 3: What is Poster Designing?' },
  { id: '4', title: 'Chapter 4: What is Picture Editing?' },
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