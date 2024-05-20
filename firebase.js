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
  const reference = ref(db, 'posts/' + id);
  await set(reference, {
    nick: nick,
    tresc: tresc
  });
}

export async function GetPost(id) {
  const userRef = ref(db, `posts/${id}`);
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      console.log("istnieje");
      return snapshot.val();
    } else {
      console.log("nie istnieje");
      return null;
    }
  } catch (error) {
    console.error(`Błąd podczas pobierania postu o ID ${id}:`, error);
    return null;
  }
}

export async function UsunPost(id) {
  const reference = ref(db, 'posts/' + id);
  try {
    await remove(reference);
    console.log(`Post o ID ${id} został usunięty.`);
  } catch (error) {
    console.error(`Błąd podczas usuwania postu o ID ${id}:`, error);
  }
}

async function TestPolaczeniaBazyDanych() {
  await UserAddPost(0, "testy", "testy");
  await GetPost(0);
  await UsunPost(0);
  await GetPost(0);
}

TestPolaczeniaBazyDanych();

export { auth };
