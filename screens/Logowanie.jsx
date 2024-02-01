import React, { useState } from 'react';
import {TouchableOpacity } from 'react-native';
import AvoidingKeyboard from "../components/AvoidingKeyboard";
import { StyledContainer, StyledTextInput, StyledButton,  StyledText, StyledLink } from '../components/styles';

const Logowanie = ({navigation}) => {
  const [nick, setNick] = useState('');
  const [haslo, setHaslo] = useState('');

  const handleLogin = () => {
    //Alert.alert(`${nick}, jeśli ktoś to ogarnie, to będziesz w ten sposób logowany! 😘`);
    navigation.navigate('main')
  };

  return (
    <AvoidingKeyboard>
        <StyledContainer>
          <StyledText>Log In</StyledText>
          <StyledTextInput
            placeholder="nick"
            onChangeText={setNick}
            value={nick}
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