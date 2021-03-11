import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import DestinationSearch from '../../DestinationSearch'
import Guests from '../../Guests'
import HomeTabNavigator from './HomeTabNavigator'
import PostScreen from '../PostScreen'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
                name={"Home"}
                component={HomeTabNavigator}
                options={{
                    headerShown:false
                }}
                />
                <Stack.Screen 
                name={"Destination Search"}
                component={DestinationSearch}
                options={{
                }}
                />
                 <Stack.Screen 
                name={"Guests"}
                component={Guests}
                options={{
                    
                }}
                />
                  <Stack.Screen 
                name={"Post"}
                component={PostScreen}
                options={{
                    headerShown:false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
