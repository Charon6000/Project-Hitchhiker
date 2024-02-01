import React, { useState } from 'react';
import {Alert} from 'react-native';
import ImagePickerForm from '../components/ImagePickerForm';
import AvoidiongKeyboard from '../components/AvoidingKeyboard';
import { StyledContainer, StyledTextInput, StyledButton,  StyledText} from '../components/styles';


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
      <StyledContainer>
        <StyledText>Join us!</StyledText>
        <StyledTextInput
          placeholder="nick"
          onChangeText={setNick}
          value={nick}
        />
        <StyledTextInput
          placeholder="password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <StyledTextInput
          placeholder="repeat password"
          onChangeText={setRpassword}
          value={rpassword}
          secureTextEntry
        />
        <StyledTextInput
          placeholder="email"
          onChangeText={setEmail}
          value={email}
        />
        {/* <ImagePickerForm image={image} setImage={setImage}/> */}
        <StyledButton title="Register" onPress={handleRegister} />
      </StyledContainer>
    </AvoidiongKeyboard>
  );
};

export default Rejestrowanie;
