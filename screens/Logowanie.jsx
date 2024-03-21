import React, { useState } from 'react';
import {TouchableOpacity } from 'react-native';
import AvoidingKeyboard from "../components/AvoidingKeyboard";
import { StyledContainer, StyledTextInput, StyledButton,  StyledText, StyledLink } from '../components/styles';
import {auth} from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const Logowanie = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');

  const handleLogin = () => {
    //Alert.alert(`${nick}, jeśli ktoś to ogarnie, to będziesz w ten sposób logowany! 😘`);
    signInWithEmailAndPassword(auth, email, haslo)
    .then((userCredential)=>{
      const user = userCredential.user;
    })
    .catch((error)=>console.log(error));
    //navigation.navigate('main');
  };

  return (
    <AvoidingKeyboard>
        <StyledContainer>
          <StyledText>Log In</StyledText>
          <StyledTextInput
            placeholder="nick"
            onChangeText={setEmail}
            value={email}
          />
          <StyledTextInput
            placeholder="password"
            onChangeText={setHaslo}
            value={haslo}
            secureTextEntry
          />
          <StyledButton
            title="Login"
            onPress={handleLogin}
          />
          <TouchableOpacity onPress={() => navigation.navigate('registration')}>
          <StyledLink>Create account</StyledLink>
          </TouchableOpacity>
        </StyledContainer>
    </AvoidingKeyboard>
  );
};

export default Logowanie;