import React from 'react'
import { Text } from 'react-native'
import { StyledContainer, StyledTextInput, StyledPostInput } from '../../components/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'



const Posts = () => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState('');

  return (
    <StyledContainer>
      <TouchableOpacity>
        <StyledPostInput
          isHovered={isHovered}
          onChangeText={setText}
          placeholder="Poinformuj innych o swojej podrozy..."
        />
      </TouchableOpacity>
    </StyledContainer>
  )
}

export default Posts