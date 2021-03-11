/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Post from './src/components/Post';
import HomeScreen from './src/components/screens/home';
import feed from './assets/images/data/feed'
import {SearchResultsScreen} from './src/components/SearchResultsScreen';
import DestinationSearch from './src/components/DestinationSearch';
import Guests from './src/components/Guests';
import Router from './src/components/screens/navigation/Router';
import 'react-native-gesture-handler';


const post1 = feed[0]


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};



export default App;
