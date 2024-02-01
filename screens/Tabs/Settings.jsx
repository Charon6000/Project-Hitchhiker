import React from 'react'
import { StyledButton, StyledText, StyledContainer } from '../../components/styles'

function Settings({ navigation }) {
  return (
    <StyledContainer>
      <StyledText>Settings</StyledText>
      <StyledButton
        title="Log out"
        onPress={() => navigation.navigate('login')}
      />
    </StyledContainer>
  )
}

export default Settings