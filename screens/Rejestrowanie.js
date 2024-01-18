import React, {useState} from 'react';
import { SafeAreaView, TextInput, Text, Button, Alert } from 'react-native';

function Rejestrowanie() { 
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');

  function Register()
  {
    if(nick != null || password != null|| rpassword != null)
      Alert.alert(nick + " jak ktoś to ogarnie to będziesz w ten sposób rejestrowany 😘")
    else
      Alert.alert("Musisz wypełnić cały formularz😘")

  }

  return (
    <SafeAreaView>
      <Text>Join us!</Text>
      <TextInput placeholder="nick" onChangeText={setNick} value={setNick} />
      <TextInput placeholder="password" onChangeText={setPassword} value={password} />
      <TextInput placeholder="repeat password" onChangeText={setRpassword} value={rpassword} />
      <Button title="login" onPress={Register} />
    </SafeAreaView>
  );
}

export default Rejestrowanie;
