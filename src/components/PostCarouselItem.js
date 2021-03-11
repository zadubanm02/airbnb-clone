import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {View, Text, StyleSheet,Image, useWindowDimensions, Pressable} from 'react-native'

const PostCarouselItem = (props) => {
    const post = props.post
    const width = useWindowDimensions().width
    const navigation = useNavigation()
    const goToPostPage = () => {
        navigation.navigate("Post", {postId:post.id})
    }
    return (
        <Pressable onPress={goToPostPage} style={[styles.container, {width:width-30}]}> 
            <View style={styles.innerContainer}>
            <Image style={styles.image} source={{uri:post.image}}/>
            <View style={{marginHorizontal:10, flex:1}}>
            <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} bedroom </Text>
            <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>  ${post.newPrice}  </Text>
                / night
            </Text>
            </View>
            </View>
        </Pressable>
    )
}

export default PostCarouselItem


const styles = StyleSheet.create({
    container : {
        height:150,
        padding:5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    innerContainer:{
        flexDirection:'row',
        backgroundColor:"#fff",
        borderRadius:15,
        overflow:'hidden'
    },
    image: {
        height:'100%',
        aspectRatio:1,
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