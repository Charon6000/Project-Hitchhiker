import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';

const Rejestrowanie = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');

  const handleRegister = () => {
    if (nick && password && rpassword) {
      Alert.alert(`${nick}, jeśli ktoś to ogarnie, to zostaniesz zarejestrowany! 😘`);
    } else {
      Alert.alert('Musisz wypełnić cały formularz! 😘');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Join us!</Text>
      <TextInput
        style={styles.input}
        placeholder="nick"
        onChangeText={setNick}
        value={nick}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="repeat password"
        onChangeText={setRpassword}
        value={rpassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Rejestrowanie;
