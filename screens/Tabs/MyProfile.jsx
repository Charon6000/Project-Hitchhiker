import React from 'react'
import { StyledButton, StyledText, StyledContainer } from '../../components/styles'
import {auth} from '../../firebase';
import { signOut } from 'firebase/auth';

function MyProfile({ navigation, route }) {
  return (
    <StyledContainer>
      <StyledText>Email: {route.params.email}</StyledText>
      <StyledButton
        title="Log out"
        onPress={() => 
          signOut(auth).then(() => {
            navigation.navigate('login');
          }).catch((error) => {
            // An error happened.
          })
        }
      />
    </StyledContainer>  
  )
}

export default MyProfile