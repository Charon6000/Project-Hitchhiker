import styled from 'styled-components';
import {SafeAreaView, TextInput, Image, Text, Button} from 'react-native';

export const StyledContainer = styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    padding: 20px;
    height: 100%;
    width: 100%;
`

export const StyledImage = styled.Image`
    width: 100;
    height: 100;
    marginBottom: 10px;
`

export const StyledButton = styled.Button`
    fontWeight: bold;
    marginVertical: 10px;
`
export const StyledText = styled.Text`
    fontSize: 20px;
    fontWeight: bold;
    marginBottom: 20px;
`

export const StyledLink = styled.Text`
    fontSize: 15px;
    color: blue;
`

export const StyledTextInput = styled.TextInput`
    height: 40px;
    width: 200px;
    borderColor: gray;
    borderRadius:10px;
    borderWidth: 1px;
    marginBottom: 10px;
    paddingLeft: 10px;
    paddingRight: 10px;
`;