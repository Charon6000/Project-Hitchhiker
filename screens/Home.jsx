import React from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';
import { Image } from 'expo-image';

function Home({ navigation }) {
  return (
    <SafeAreaView className="home">
      <Image source={{ uri: '../assets/OIG.jpg' }} style={{ width: 100, height: 100 }} />
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
