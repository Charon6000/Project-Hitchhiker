import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCW1urZn1ywfH1q0VMY9svX8a66Gt4Y4m4",
  authDomain: "hitchhiker-4c3e0.firebaseapp.com",
  databaseURL: "https://hitchhiker-4c3e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hitchhiker-4c3e0",
  storageBucket: "hitchhiker-4c3e0.appspot.com",
  messagingSenderId: "266858384206",
  appId: "1:266858384206:web:2ada0f99a7ab6b03c5ac1f",
  measurementId: "G-TK7W54MDBG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getDatabase();

export async function UserAddPost(id, nick, tresc) {
  const start = performance.now();
  const reference = ref(db, 'posts/' + id);
  await set(reference, {
    nick: nick,
    tresc: tresc
  });
  const end = performance.now()
  const czas = (start-end)/1000
  console.log(`Czas dodawania postu wynosi ${czas} sekund`)
}

export async function GetPost(id) {
  const start = performance.now();
  const userRef = ref(db, `posts/${id}`);
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      console.log(`Post o ID ${id} istnieje`);
      const end = performance.now()
      const czas = (start-end)/1000
      console.log(`Czas pobierania postu wynosi ${czas} sekund`)
      return snapshot.val();
    } else {
      console.log(`Post o ID ${id} nie istnieje`);
      const end = performance.now()
      const czas = (start-end)/1000
      console.log(`Czas pobierania postu wynosi ${czas} sekund`)
      return false;
    }
  } catch (error) {
    console.error(`Błąd podczas pobierania postu o ID ${id}:`, error);
    const end = performance.now()
    const czas = (start-end)/1000
    console.log(`Czas pobierania postu wynosi ${czas} sekund`)
    return false;
  }
}

export async function UsunPost(id) {
  const start = performance.now();
  const reference = ref(db, 'posts/' + id);
  try {
    await remove(reference);
    console.log(`Post o ID ${id} został usunięty.`);
  } catch (error) {
    console.error(`Błąd podczas usuwania postu o ID ${id}:`, error);
  }
  const end = performance.now()
  const czas = (start-end)/1000
  console.log(`Czas usuwania postu wynosi ${czas} sekund`)
}

async function TestPolaczeniaBazyDanych() {
  await UsunPost(0);
  await UserAddPost(0, "testy", "testy");
  let wynik1 = await GetPost(0);
  await UsunPost(0);
  let wynik2 = await GetPost(0);
  if(wynik1 && !wynik2)
    {
      console.log("Połączenie z bazą danych jest prawidłowe")
      return true
    }
  else
  {
    console.log("Połączenie z bazą danych nie jest prawidłowe")
    return false
  }
}

TestPolaczeniaBazyDanych();

export { auth };
