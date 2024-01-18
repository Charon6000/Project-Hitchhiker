import React from 'react';
import { View, Text, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="login"
        onPress={() => navigation.navigate('logowanie')}
      />
    </View>
  );
}

export default Home;
