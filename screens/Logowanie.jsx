import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';

const Logowanie = ({navigation}) => {
  const [nick, setNick] = useState('');
  const [haslo, setHaslo] = useState('');

  const handleLogin = () => {
    //Alert.alert(`${nick}, jeśli ktoś to ogarnie, to będziesz w ten sposób logowany! 😘`);
    navigation.navigate('main')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="nick"
        onChangeText={setNick}
        value={nick}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={setHaslo}
        value={haslo}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
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
    borderRadius:10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,

  },
});

export default Logowanie;