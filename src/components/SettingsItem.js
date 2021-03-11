import React from 'react'
import {View, Text} from 'react-native'

const SettingsItem = (props) => {
    const {label, comment} = props;
    return (
        <View style={{borderBottomWidth:1, borderBottomColor:'lightgrey', marginHorizontal:20, paddingVertical:20}} > 
        <Text style={{fontSize:18, color:'grey'}}>{label}</Text>
        {comment && <Text style={{fontSize:14, color:'grey',marginTop:5 }}>{comment}</Text>}
        </View>
    )
}

export default SettingsItem
