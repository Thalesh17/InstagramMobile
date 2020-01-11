import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import Post from './src/components/Post';

const width = Dimensions.get('screen').width;

const fotos = [
  {id: 1, usuario: 'Rhanna'},
  {id: 2, usuario: 'Charles'},
  {id: 3, usuario: 'Sheyla'},
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      fotos: [],
    };
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={({item}) => <Post foto={item}></Post>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default App;
