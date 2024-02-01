import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Map from './Tabs/Map'
import Settings from './Tabs/Settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const screenOptions ={
  // headerShown: false,
  tabBarShowLabel:false,
  tabBarStyle:{
    position: "absolute",
  }
}

function Main() {
  return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
            name="Map" 
            component={Map} 
            options={{ title: 'Map' }} 
            />
            <Tab.Screen 
            name="Settings" 
            component={Settings}
            options={{ title: 'User Settings' }} 
            />
        </Tab.Navigator>
  )
}

export default Main