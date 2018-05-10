// Import libraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make class component
class AlbumList extends Component {
    // define initial state 
    state = { albums: [] }; // fit into empty object
    componentWillMount() {
        // console.log('componentWillMount in AlbumList');
        // get() will give us a Promise
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
    
    render() {
        // to check if we're getting data
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()};
            </ScrollView>
        );
    }
}

// Make component available to other parts of project
export default AlbumList;
