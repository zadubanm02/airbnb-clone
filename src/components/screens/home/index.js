import React from 'react'
import {View, Text, ImageBackground, Pressable, ScrollView, useWindowDimensions, StyleSheet } from 'react-native'
//import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'
import PlaceItem from '../../PlaceItem'
import LiveItem from '../../LiveItem'
import ExperienceItem from '../../ExperienceItem'
import Animated, { Extrapolate, interpolate, useSharedValue } from 'react-native-reanimated'
import {onScroll} from 'react-native-redash'

export const BUTTON_HEIGHT = 48;
export const BUTTON_WIDTH = 200;

const HEADER_HEIGHT = 50

const HomeScreen = () => {
    const {Value} = Animated;
    const headerY = Animated.interpolate(scrollY, {
        inputRange:[0, HEADER_HEIGHT],
        outputRange:[0, -HEADER_HEIGHT]
    })
    const navigation = useNavigation()
    const width = useWindowDimensions().width
    const scrollY = useSharedValue(0)
    return (
        <Animated.ScrollView style={{backgroundColor:'#fff'}}
            onScroll={Animated.event([
                {
                    nativeEvent:{contentOffset:{y:scrollY}}
                }
            ])}
        >   
            <Animated.View style={[styles.button,{transform:[{translateY:10}], backgroundColor:'#fff',flexDirection:'row',padding: 10,width:"85%", position:'absolute', top:30, zIndex:2,elevation:50, marginHorizontal:25,  height:HEADER_HEIGHT, borderRadius:20, justifyContent:'center', alignItems:'center',marginTop:25}]}>
            <Pressable onPress={()=>navigation.navigate("Destination Search")} style={{flexDirection:'row'}} >
                    <Fontisto name="search" size={25} color={'#f15454'} />
                    <Text style={{marginLeft:20,fontSize:16, fontWeight:'bold'}}>Where are you going?</Text>
            </Pressable>
            </Animated.View>
            <ImageBackground source={require('../../../../assets/images/wallpaper.jpg')} style={{zIndex:1,width:500, height:600, resizeMode:'cover', justifyContent:'center'}} >
                <Text style={{fontSize:80, fontWeight:'bold', color:'#fff', width:'60%', marginLeft:25}}>Go near</Text>
                <Pressable style={{backgroundColor:'#fff', marginLeft:25, width:200, height:40, borderRadius:20, justifyContent:'center', alignItems:'center',marginTop:25}} onPress={()=>{}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
            <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width-60}
            snapToAlignment={'center'}
            decelerationRate={"fast"}>
            <View style={{marginHorizontal:10, marginVertical:20}}>
                <PlaceItem drive={"1,5 hour drive"} text="Bratislava" image={"https://images.unsplash.com/photo-1536843061801-1623d94fec73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}/>
                <PlaceItem drive={"0,5 hour drive"} text="Trnava" image={"https://images.unsplash.com/photo-1536843061801-1623d94fec73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}/>

            </View>
            <View style={{marginHorizontal:10, marginVertical:20}}>
                <PlaceItem drive={"1,5 hour drive"} text="Bratislava" image={"https://images.unsplash.com/photo-1536843061801-1623d94fec73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}/>
                <PlaceItem drive={"1,5 hour drive"} text="Bratislava" image={"https://images.unsplash.com/photo-1536843061801-1623d94fec73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}/>

            </View>
            </ScrollView>
            <View style={{ marginVertical:25}}>
                <Text style={{fontWeight:'bold', fontSize:22, marginHorizontal:30}}>
                    Live anywhere
                </Text>
                <ScrollView horizontal style={{marginHorizontal:20}} 
                showsHorizontalScrollIndicator={false}
                snapToInterval={width-120}
                snapToAlignment={'center'}
                decelerationRate={"fast"} >
                    <LiveItem text={"Entire homes"} image={"https://images.unsplash.com/photo-1494526585095-c41746248156?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}/>
                    <LiveItem text={"Cabins and cottages"} image={"https://images.unsplash.com/photo-1525113990976-399835c43838?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"}/>
                    <LiveItem text={"Unique stays"} image={"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"}/>
                    <LiveItem text={"Pets welcome"} image={"https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"}/>

                </ScrollView>
            </View>
            <View style={{backgroundColor:'#000',}}>
                <Text style={{color:'#fff', fontWeight:'bold', fontSize:22, marginHorizontal:30, marginTop:20, marginBottom:10}}>Experience the world</Text>
                <Text style={{color:'#fff', marginHorizontal:30, fontSize:16}}>Unique activities with local experts-in person or online</Text>
                <ScrollView horizontal style={{marginHorizontal:20, marginBottom:20}} 
                showsHorizontalScrollIndicator={false}
                snapToInterval={width-120}
                snapToAlignment={'center'}
                decelerationRate={"fast"} >
                    <ExperienceItem title={"Online Experiences"} description={"Travel without leaving home"} image={"https://images.unsplash.com/photo-1478860002487-680cc42afbeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}/>
                    <ExperienceItem title={"Experiences"} description={"Things to do wherever you are"} image={"https://images.unsplash.com/photo-1567773616496-b93ef5caa386?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}/>
                    <ExperienceItem title={"Adventures"} description={"Multi-day trips with meals and stays"} image={"https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"}/>

                </ScrollView>
            </View>
        </Animated.ScrollView >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    button: {
      alignSelf: "center",
      backgroundColor: "#1ed760",
      height: BUTTON_HEIGHT,
      width: BUTTON_WIDTH,
      borderRadius: 32,
      justifyContent: "center",
    },
    label: {
      color: "white",
      fontSize: 14,
      textAlign: "center",
      fontWeight: "600",
    },
  });