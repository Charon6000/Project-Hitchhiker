import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Logowanie';
import Register from './screens/Rejestrowanie';
import Main from './screens/Main';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="registration" component={Register} />
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
