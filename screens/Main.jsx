import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Map from './Tabs/Map'
import MyProfile from './Tabs/MyProfile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Posts from './Tabs/Posts'

const Tab = createBottomTabNavigator()
const screenOptions ={
  // headerShown: false,
  tabBarShowLabel:false,
  tabBarStyle:{
    position: "absolute",
  }
}

function Main({route}) {
  return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
            name="Map" 
            component={Map} 
            options={{ title: 'Map' }} 
            />
            <Tab.Screen
            name='Posts'
            component={Posts}
            options={{title : 'Posts'}}
            />
            <Tab.Screen 
            name="MyProfile" 
            component={MyProfile}
            options={{ title: 'My Profile' }} 
            initialParams={{ user: route.params.user, email: route.params.email }}
            />
        </Tab.Navigator>
  )
}

export default Main