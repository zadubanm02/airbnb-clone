import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {View, Text, StyleSheet,Image, Pressable} from 'react-native'

const Post = (props) => {
    const post = props.post
    const navigation = useNavigation()
    const goToPostPage = () => {
        navigation.navigate("Post", {postId:post.id})
    }
    return (
        <Pressable onPress={goToPostPage} style={styles.container}> 
            <Image style={styles.image} source={{uri:post.image}}/>
            <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} bedroom </Text>
            <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>  ${post.newPrice}  </Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </Pressable>
    )
}

export default Post

const styles = StyleSheet.create({
    container : {
        margin:20,
    },
    image: {
        width:'100%',
        aspectRatio:3/2,
        resizeMode:'cover',
        borderRadius:10
    },
    bedroom: {
        marginVertical:10,
        color:"#5b5b5b"
    },
    description: {
        fontSize:18,
        lineHeight:26
    },
    prices: {
        fontSize:18,
        marginVertical:10,
    },
    oldPrice: {
        color:"#5b5b5b",
        textDecorationLine:'line-through'
    },
    newPrice: {
        fontWeight:'bold'
    },
    totalPrice: {
        color:"#5b5b5b",
        textDecorationLine:'underline'
    }
})