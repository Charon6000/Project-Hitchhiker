import React, {useState} from 'react';
import { SafeAreaView, TextInput, Text, Button, Alert } from 'react-native';

function Logowanie() { 
  const [nick, setNick] = useState('');
  const [haslo, setHaslo] = useState('');

  function login()
  {
    Alert.alert(nick + " jak ktoś to ogarnie to będziesz w ten sposób logowany 😘")
  }

  return (
    <SafeAreaView>
      <Text>Log In</Text>
      <TextInput
        placeholder="nick"
        onChangeText={setNick}
        value={setNick}
      />
      <TextInput
        placeholder="password"
        onChangeText={setHaslo}
        value={haslo}
      />
      <Button
        title="login"
        onPress={login}
      />
    </SafeAreaView>
  );
}

export default Logowanie;
