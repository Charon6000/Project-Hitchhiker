import React from 'react'
import { StyledButton, StyledText, StyledContainer } from '../../components/styles'

function MyProfile({ navigation }) {
  return (
    <StyledContainer>
      <StyledText>My Profile</StyledText>
      <StyledButton
        title="Log out"
        onPress={() => navigation.navigate('login')}
      />
    </StyledContainer>
  )
}

export default MyProfile