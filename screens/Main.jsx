import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Map from './Tabs/Map'
import MyProfile from './Tabs/MyProfile'
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
            name="MyProfile" 
            component={MyProfile}
            options={{ title: 'My Profile' }} 
            />
        </Tab.Navigator>
  )
}

export default Main