import React from 'react'
import {View, Text, TextInput, StyleSheet, FlatList, Pressable} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

const SuggestionRow = ({item}) => {
    return (
        <View onPress={()=>navigation.navigate("Guests")} style={styles.row}>
        <View style={styles.searchIcon}>
            <Entypo name={'location-pin'} size={35}/>
        </View>
        <Text style={styles.locationText}>
            {item.description}
        </Text>
    </View>
    )
}

export default SuggestionRow

const styles = StyleSheet.create({
    container: {
        margin:20,
    },
    searchInput: {
        fontSize:18,
        marginBottom:20,
    },
    row: {
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        borderBottomWidth:1,
        borderColor:'lightgrey',
        paddingVertical:15
    },
    searchIcon: {
        padding:5,
        borderRadius:10,
        backgroundColor:"#e7e7e7",
        marginRight:15
    },
    locationText: {

    }
})