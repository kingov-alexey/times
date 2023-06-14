import React from 'react';
import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Alert, 
  FlatList, 
  ActivityIndicator, 
  RefreshControl,
  TouchableOpacity

} from 'react-native';
import {HomeScreen} from './screens/HomeScreen'
import {FullPostScreen} from './screens/FullPostScreen'

import {Post} from './components/Post.jsx';
import axios from 'axios';

export default function App() {
  return (
    <View>
      <HomeScreen />

      {/* <FullPostScreen /> */}
      

    
      <StatusBar theme='auto' />
    </View>
  );
}
