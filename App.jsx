import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Logowanie';
import Register from './screens/Rejestrowanie';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen name="login" component={Login} 
          options={{headerShown:false}}
        />
        <Stack.Screen name="registration" component={Register} 
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
