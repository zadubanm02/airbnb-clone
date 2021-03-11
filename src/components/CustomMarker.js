import React from 'react'
import {View, Text} from 'react-native'
import MapView,{ Marker } from 'react-native-maps';


const CustomMarker = (props) => {
    const {coordinates, price, onPress, isSelected} = props
    return (
        <Marker
            coordinate={coordinates}
            onPress={onPress}
        >
            <View style={{backgroundColor:isSelected ? '#000' : '#fff', padding:7, borderRadius:10, borderWidth:1, borderColor:'black'}}>
                    <Text style={{fontWeight:'bold', color:isSelected ? '#fff' : '#000'}}>${price}</Text>
            </View>
        </Marker>
    )
}

export default CustomMarker
