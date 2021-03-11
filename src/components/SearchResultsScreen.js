import React from 'react';
import {View,Text, FlatList} from 'react-native';
import feed from '../../assets/images/data/feed';
import Post from './Post';

export const SearchResultsScreen = (props) => {
  return (
    <>
    <View>
    <FlatList 
      data={feed}
      renderItem={({item})=> <Post post={item}/>}
    />
    </View>
    </>
  );
};

