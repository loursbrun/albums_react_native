// Import librairies

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumsList';


// Créate components
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    );
    

// Render Components
AppRegistry.registerComponent('albums', () => App);

