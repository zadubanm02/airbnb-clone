import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const PlaceItem = (props) => {
    const {image, text, drive} = props
    return (
       <View style={{height:80,marginHorizontal:20,marginVertical:7, flexDirection:'row', backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center',}}>
           <Image style={styles.image} source={{uri:image}}/>
           <View style={{margin:10}}>
           <Text style={{fontSize:16, fontWeight:'bold'}}>
            {text}
           </Text>
           <Text style={{color:'grey'}}>
               {drive}
           </Text>
           </View>
       </View>
    )
}

export default PlaceItem


const styles = StyleSheet.create({
    image: {
        height:'100%',
        aspectRatio:1,
        resizeMode:'cover',
        borderRadius:15
    },
})