import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Logowanie';
import Register from './screens/Rejestrowanie';
import Main from './screens/Main';
import { checkAndInstallNpmLibraries, checkAndInstallNpxLibraries } from './pobierz_biblioteki.js';

const Stack = createStackNavigator();

function App() {
  checkAndInstallNpmLibraries()
  checkAndInstallNpxLibraries()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="registration" component={Register} />
        <Stack.Screen name="main" component={Main} 
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
