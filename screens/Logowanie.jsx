import React, { useState } from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';
import AvoidingKeyboard from "../components/AvoidingKeyboard";
import { StyledContainer, StyledTextInput, StyledButton,  StyledText, StyledLink } from '../components/styles';
import {auth} from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, getRedirectResult } from 'firebase/auth';

const Logowanie = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, haslo)
    .then((userCredential)=>{
      const user = userCredential.user;
      navigation.navigate('main');
    })
    .catch((error)=>{
      setError(error.message);
    });
  };


  
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithCredential(auth, provider)
    .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigation.navigate('main');
    }).catch((error)=>{
      setError(error.message);
      const credential = GoogleAuthProvider.credentialFromError(error);
      const email = error.customData.email;
    });
  }

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
            title="Google"
            onPress={googleLogin}
          />
          <Text style={{color: 'red'}}>{error}</Text>
          <StyledButton
            title="Login"
            onPress={
              handleLogin
              //navigation.navigate('main')
            }
          />
          <TouchableOpacity onPress={() => navigation.navigate('registration')}>
          <StyledLink>Create account</StyledLink>
          </TouchableOpacity>
        </StyledContainer>
    </AvoidingKeyboard>
  );
};

export default Logowanie;