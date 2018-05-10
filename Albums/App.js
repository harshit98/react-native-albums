import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      // take up the entire area
      // use flex: 1
      <View style={{ flex: 1 }}>
        <Header headerText='Albums' />
        <AlbumList />
      </View>
    );
  }
}

// To enable debugger of fetched data
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
