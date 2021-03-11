import React, { useState } from 'react'
import {View, Text, TextInput, StyleSheet, FlatList, Pressable} from 'react-native'
import search from '../../assets/images/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow'


const DestinationSearch = () => {
    const navigation = useNavigation()
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <View style={styles.container}> 
        <View style={{height:'100%', padding:20, backgroundColor:'white'}}>
        <GooglePlacesAutocomplete
      placeholder='Where are u going?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        navigation.navigate("Guests")
        console.log(data, details);
      }}
      styles={{
          textInput:styles.searchInput
      }}
      query={{
        key: 'AIzaSyAxkG9ETC1m9SdvG2ERrxaXLFJQ5E9C8ws',
        language: 'en',
        types:'(cities)'
      }}
      renderRow={(item) => <SuggestionRow item={item}/>}
      suppressDefaultStyles={true}
      fetchDetails={true}
    />
        </View>
        
            {/* <TextInput 
            style={styles.searchInput}
            placeholder="Where are u going?"
            value={searchTerm}
            onChangeText={setSearchTerm}
            />
            <FlatList 
            data={search}
            renderItem={({item}) => 
            <Pressable onPress={()=>navigation.navigate("Guests")} style={styles.row}>
                <View style={styles.searchIcon}>
                    <Entypo name={'location-pin'} size={35}/>
                </View>
                <Text style={styles.locationText}>
                    {item.description}
                </Text>
            </Pressable>
            }
            /> */}
        </View>
    )
}

export default DestinationSearch


const styles = StyleSheet.create({
    container: {
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