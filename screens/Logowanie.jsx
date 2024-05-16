import React, { useState } from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';
import AvoidingKeyboard from "../components/AvoidingKeyboard";
import { StyledContainer, StyledTextInput, StyledButton,  StyledText, StyledLink } from '../components/styles';
import {auth} from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getRedirectResult } from 'firebase/auth';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Logowanie = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, haslo)
    .then((userCredential)=>{
      const user = userCredential.user;
      navigation.navigate('main', {user:user, email:email});
    })
    .catch((error)=>{
      setError(error.message);
    });
  };

  return (
    <AvoidingKeyboard>
        <StyledContainer>
          <StyledText>Log In</StyledText>
          <StyledTextInput
            placeholder=" Email"
            onChangeText={setEmail}
            value={email}
          />
          <StyledTextInput
            placeholder=" Password"
            onChangeText={setHaslo}
            value={haslo}
            secureTextEntry={true}
          />
          <Text style={{color: 'red'}}>{error}</Text>
          <Button
            type="outline"
            title="Login"
            onPress={
              handleLogin
              //navigation.navigate('main', {user:"dupa", email:"cyce@wadowice"})
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