import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';

const ExperienceItem = (props) => {
    const {image, title, description} = props
    return (
        <View style={{height:350, margin:10}}>
            <Image style={styles.image} source={{uri:image}}/>
            <Text style={{color:"#fff"}}>{title}</Text>
            <Text style={{color:"#fff", fontSize:12}}>{description}</Text>
        </View>
    )
}

export default ExperienceItem

const styles = StyleSheet.create({
    image: {
        height:'80%',
        aspectRatio:1,
        resizeMode:'cover',
        borderRadius:10,
        marginVertical:10
    },
})