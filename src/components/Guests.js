import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Guests = () => {
    const navigation = useNavigation()
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    return (
        <View style={{margin:20,justifyContent:'space-between', height:'100%'}}>
            <View style={{}}>
            <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row', paddingVertical:20,marginHorizontal:20, borderBottomWidth:1, borderColor:'lightgrey'}}>
                <View styles={{}}>
                    <Text style={{fontWeight:'bold', color:'#000'}}>
                        Adults
                    </Text>
                    <Text style={{color:'grey'}}>
                        Age 13 or above
                    </Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable 
                        onPress={()=>setAdults(Math.max(0,adults-1))}
                        style={styles.button}
                    >
                    <Text style={{color:'grey', fontSize:24, textAlign:'center'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal:20, fontSize:16}}>{adults}</Text>
                    <Pressable 
                        onPress={()=>setAdults(adults+1)}
                        style={styles.button}
                    >
                    <Text style={{color:'grey', fontSize:24, textAlign:'center'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row', paddingVertical:20,marginHorizontal:20, borderBottomWidth:1, borderColor:'lightgrey'}}>
                <View styles={{}}>
                    <Text style={{fontWeight:'bold', color:'#000'}}>
                        Children
                    </Text>
                    <Text style={{color:'grey'}}>
                        Ages 2 - 12
                    </Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable 
                        onPress={()=>setChildren(Math.max(0,children-1))}
                        style={styles.button}
                    >
                    <Text style={{color:'grey', fontSize:24, textAlign:'center'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal:20, fontSize:16}}>{children}</Text>
                    <Pressable 
                        onPress={()=>setChildren(children+1)}
                        style={styles.button}
                    >
                    <Text style={{color:'grey', fontSize:24, textAlign:'center'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row', paddingVertical:20,marginHorizontal:20, borderBottomWidth:1, borderColor:'lightgrey'}}>

                <View styles={{}}>
                    <Text style={{fontWeight:'bold', color:'#000'}}>
                        Infants
                    </Text>
                    <Text style={{color:'grey'}}>
                        Under 2
                    </Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable 
                        onPress={()=>setInfants(Math.max(0,infants-1))}
                        style={styles.button}
                    >
                    <Text style={{color:'grey', fontSize:24, textAlign:'center'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal:20, fontSize:16}}>{infants}</Text>
                    <Pressable 
                        onPress={()=>setInfants(infants+1)}
                        style={styles.button}
                    >
                    <Text style={{color:'grey', fontSize:24, textAlign:'center'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            </View>
            
                <Pressable onPress={() => navigation.navigate("Home", {
                    screen:'Explore',
                    params: {
                        screen:'Search Results'
                    }
                })} style={{marginBottom:30, backgroundColor:'#f15454', justifyContent:'center', alignItems:'center', padding:20, borderRadius:10}}>
                    <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>
                        Search
                    </Text>
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth:1,
        width:30,
        height:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'grey'
    }
})

export default Guests


