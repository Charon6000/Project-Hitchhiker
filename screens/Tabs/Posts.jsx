import {React, useEffect, useState} from 'react'
import { Text } from 'react-native'
import { StyledContainer, StyledTextInput, StyledPostInput } from '../../components/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { UserAddPost, auth, db } from '../../firebase'
import { ref, onValue } from "firebase/database";
import { Data } from '@react-google-maps/api'
import { DataTable } from 'react-native-paper';

const Posts = () => {
  
  const [text, setText] = useState('');
  const [userData, setUserData] = useState(null);
  const [enterTime, setEnterTime] = useState(null);
  const [liczbaPostow, setLiczbaPostow] = useState(0);
  const user = auth.currentUser;

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

  const addPost = () => {
    const enterTime = performance.now();
    setEnterTime(enterTime);
    UserAddPost(Object.keys(userData).length + 1, user.email, text);
    setText('');
    setLiczbaPostow(prevCount => prevCount + 1); 
  };
  
  useEffect(() => {
    if (liczbaPostow > 0 && enterTime !== null) {
      const endTime = performance.now();
      const czas = (endTime - enterTime)/1000;
      console.log(`Czas między naciśnięciem klawisza enter a pokazaniem się postu: ${czas} sekund`);
    }
  }, [liczbaPostow, enterTime]);

  
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