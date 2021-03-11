import React from 'react'
import {View, Text} from 'react-native'
import Post from '../Post'
import {useRoute} from '@react-navigation/native'

import places from '../../../assets/images/data/feed' 
import DetailedPost from '../DetailedPost'
const PostScreen = (props) => {
    const route = useRoute()
    const post = places.find((place) => place.id === route.params.postId)
    return (
        <View style={{backgroundColor:'#fff'}}>
            <DetailedPost post={post}/>
        </View>
    )
}

export default PostScreen
