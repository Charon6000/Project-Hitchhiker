import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Log in</Text>
      <Button
        title="login"
        onPress={() => navigation.navigate('login')}
      />
      <Text>Register</Text>
      <Button
        title="register"
        onPress={() => navigation.navigate('registration')}
      />
    </SafeAreaView>
  );
}

export default Home;
