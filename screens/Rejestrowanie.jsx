import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import ImagePickerForm from '../components/ImagePickerForm';
import AvoidiongKeyboard from '../components/AvoidingKeyboard';

const Rejestrowanie = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleRegister = () => {
    if (nick && password && rpassword) {
      Alert.alert(`${nick}, jeśli ktoś to ogarnie, to zostaniesz zarejestrowany! 😘`);
    } else {
      Alert.alert('Musisz wypełnić cały formularz! 😘');
    }
  };

  return (
    <AvoidiongKeyboard>
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
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={setEmail}
          value={email}
        />
        {/* <ImagePickerForm image={image} setImage={setImage}/> */}
        <Button title="Register" onPress={handleRegister} />
      </SafeAreaView>
    </AvoidiongKeyboard>
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
    borderRadius:10,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Rejestrowanie;
