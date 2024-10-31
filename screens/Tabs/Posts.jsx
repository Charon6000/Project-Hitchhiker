import {React, useEffect, useState} from 'react'
import { Text } from 'react-native'
import { StyledContainer, StyledTextInput, StyledPostInput } from '../../components/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { UserAddPost, auth, db } from '../../firebase'
import { getDatabase,ref, onValue } from "firebase/database";
import { Data } from '@react-google-maps/api'
import { DataTable } from 'react-native-paper';

const Posts = () => {
  
  const [text, setText] = useState('');
  const [userData, setUserData] = useState(null);
  const [enterTime, setEnterTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [liczbaPostow, setLiczbaPostow] = useState(0);
  const user = auth.currentUser;
  const db = getDatabase();

  useEffect(() => {
    const userRef = ref(db, 'posts/');
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData(data);
        setLiczbaPostow(Object.keys(data).length);
      }
    });
  }, []);

  const addPost = async () => {
    if (!auth.currentUser) {
      console.error("User is not authenticated");
      return;
    }
    try {
      await UserAddPost(Object.keys(userData).length + 1, user.email, text);
      setText('');
      setLiczbaPostow(prevCount => prevCount + 1);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  
  return (
    <StyledContainer>
      <TouchableOpacity>
        <StyledPostInput
          value={text}
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