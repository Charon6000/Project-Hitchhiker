import React, { useState } from 'react';
import {Alert, Text} from 'react-native';
import ImagePickerForm from '../components/ImagePickerForm';
import AvoidiongKeyboard from '../components/AvoidingKeyboard';
import { StyledContainer, StyledTextInput, StyledButton,  StyledText} from '../components/styles';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
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

  const testMail = 'test@exampole.com';
  const testPassword = 'password123';

  async function createTestUser(){
    const start = performance.now();
    createUserWithEmailAndPassword(auth, testMail, testPassword)
    .then(userCredentials=>{
      console.log(`Użytkownik o mailu: ${testMail} oraz hasle :${testPassword} poprawnie utworzony.`)
      const end = performance.now()
      const czas = (end - start)/1000
      console.log(`Tworzenie uzytkownika zajęło: ${czas} sekund`)
      signInTestUser();
    })
    .catch((error)=>{
      setError(error.message);
      console.log(`Uzytkownik o podanym mailu juz istnieje` , error);
      signInTestUser();
    })
  }

  async function signInTestUser(){
    const start = performance.now();
    signInWithEmailAndPassword(auth, testMail, testPassword)
    .then((userCredentials)=>{
      const user = userCredentials.user;
      console.log(`Uzytkownik ${testMail} poprawnie zalogowany.`)
      const end = performance.now()
      const czas = (end - start)/1000
      console.log(`Logowanie zajęło: ${czas} sekund`)
      getCurrentUserInfo();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  async function getCurrentUserInfo(){
    const start = performance.now();
    const user = auth.currentUser;
      if(user !== null){
        console.log(`Obecnie zalogowany uzytkownik: ${user.email}`);
        const end = performance.now()
        const czas = (end - start)/1000
        console.log(`Pobieranie informacji zajęło: ${czas} sekund`)
        //signOutUser();
        deleteUser();
      }else{
        console.log("Zaden uzytkownik nie jest obecnie zalgowany.")
      }
  }
  
  async function signOutUser(){
    const start = performance.now();
    signOut(auth).then(() => {
      console.log("Uzytkownik poprawnie wylogowany.")
      const end = performance.now()
      const czas = (end - start)/1000
      console.log(`Wylogowywanie zajęło: ${czas} sekund`)
    }).catch((error) => {
      console.log("Błąd podczas wylogowywania uzytkownika.", error)
    })
  }

  async function deleteUser(){
    const start = performance.now();
    const user = auth.currentUser;
      user.delete().then(() => {
        console.log("Uzytkownik poprawnie usuniety")
        const end = performance.now()
        const czas = (end - start)/1000
        console.log(`Usuwanie uzytkownika zajęło: ${czas} sekund`)
      }).catch((error) => {
        console.log("Blad podczas usuwania uzytkownika", error)
      });
  }

    createTestUser();


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
