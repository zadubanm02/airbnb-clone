import React from 'react'
import { ScrollView ,View, Image, Text, StyleSheet} from 'react-native'
import SettingsItem from '../SettingsItem'

const ProfileScreen = () => {
    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={{padding:20, flexDirection:'row', alignItems:'center'}}>
            <Image style={styles.image} source={{uri:`https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80`}}/>
             <View style={{marginLeft:10}}>
             <Text style={styles.text}>Michal</Text>
             <Text style={{color:'#f15454'}}>View profile</Text>
             </View>
            </View>
            <View>
                
            </View>
            <Text style={{marginHorizontal:20,marginTop:20, color:'lightgrey', textTransform:'uppercase',}}>account settings</Text>
            <SettingsItem label={"Personal information"} />
            <SettingsItem label={"Payments and payouts"}/>
            <SettingsItem label={"Notifications"} />
            <SettingsItem label={"Travel for work"}/>
            <Text style={{marginHorizontal:20,marginTop:20, color:'lightgrey', textTransform:'uppercase',}}>Hosting</Text>
            <SettingsItem label={"List your space"}/>
            <SettingsItem label={"Learn about hosting"} />
            <SettingsItem label={"Host an experience"}/>
            <Text style={{marginHorizontal:20,marginTop:20, color:'lightgrey', textTransform:'uppercase',}}>Support</Text>
            <SettingsItem label={"How Airbnb works"}/>
            <SettingsItem label={"Safety center"} comment={"Let our team know about concerns related to home sharing activity in your area"}/>
            <View style={{justifyContent:'center', alignItems:'center', margin:20}}>
                <Text style={{color:'lightgrey', textTransform:'uppercase'}}>Version 1.0.0</Text>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen


const styles = StyleSheet.create({
    container : {
        margin:20,
    },
    image: {
        width:100,
        aspectRatio:1,
        resizeMode:'cover',
        borderRadius:75
    },
    text: {

        color:"#5b5b5b",
        fontWeight:'bold',
        fontSize:26
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