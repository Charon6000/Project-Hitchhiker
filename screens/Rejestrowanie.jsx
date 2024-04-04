import React, { useState } from 'react';
import {Alert, Text} from 'react-native';
import ImagePickerForm from '../components/ImagePickerForm';
import AvoidiongKeyboard from '../components/AvoidingKeyboard';
import { StyledContainer, StyledTextInput, StyledButton,  StyledText} from '../components/styles';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';

const Rejestrowanie = ({navigation}) => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleRegister = () => {
    
    if (nick && password && rpassword && email && password == rpassword) {
      //Alert.alert(`${nick}, jeśli ktoś to ogarnie, to zostaniesz zarejestrowany! 😘`);

      createUserWithEmailAndPassword(auth, email,password)
      .then(userCredentials =>{
        const user = userCredentials.user;
        navigation.navigate('login');
        Alert.alert('Zostales poprawnie zarejestrowany.');
      })
      .catch((error) =>{
          setError(error.message);
      });
    
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
        <Text style={{color:'red'}}>{error}</Text>
        {/* <ImagePickerForm image={image} setImage={setImage}/> */}
        <StyledButton title="Register" onPress={handleRegister} />
      </StyledContainer>
    </AvoidiongKeyboard>
  );
};

export default Rejestrowanie;
