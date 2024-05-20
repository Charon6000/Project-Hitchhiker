import {React, useEffect} from 'react'
import { Text } from 'react-native'
import { StyledContainer, StyledTextInput, StyledPostInput } from '../../components/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'
import { UserAddPost, auth, db } from '../../firebase'
import { ref, onValue } from "firebase/database";
import { Data } from '@react-google-maps/api'
import { DataTable } from 'react-native-paper';

const Posts = () => {
  
  const [text, setText] = useState('');
  const [userData, setUserData] = useState (null);
  const user = auth.currentUser;

  useEffect(() => {
    const userRef = ref(db, 'posts/');
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData(data);
      }
    });
  }, []);

  function addPost() {
    UserAddPost(Object.keys(userData).length + 1, user.email, text)
    setText(null);
  }
  

  return (
    <StyledContainer>
      <TouchableOpacity>
        <StyledPostInput
          onChangeText={setText}
          placeholder="Poinformuj innych o swojej podrozy..."
          onSubmitEditing={addPost}
        />
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Posty</DataTable.Title>
          </DataTable.Header>
          {userData && Object.entries(userData).map(([nick, userData]) => (
          <DataTable.Row key={nick}>
            <DataTable.Cell>{userData.nick}</DataTable.Cell>
            <DataTable.Cell>{userData.tresc}</DataTable.Cell>
          </DataTable.Row>
          ))}
        </DataTable>
      </TouchableOpacity>
    </StyledContainer>
  )
}

export default Posts