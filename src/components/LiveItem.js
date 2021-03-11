import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';

const LiveItem = (props) => {
    const {image, text} = props
    return (
        <View style={{height:350, margin:10}}>
            <Image style={styles.image} source={{uri:image}}/>
            <Text>{text}</Text>
        </View>
    )
}

export default LiveItem

const styles = StyleSheet.create({
    image: {
        height:'80%',
        aspectRatio:1,
        resizeMode:'cover',
        borderRadius:10,
        marginVertical:10
    },
})