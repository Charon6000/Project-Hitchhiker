// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
//postowanie użytkownika
function UserPost(email, nick , password, imageUrl)
{
    const db = getDatabase()
    const reference = ref(db, 'users/'+ email)

    set(reference, {
        nick: nick,
        haslo: password,
        zdjecie : imageUrl
    })
}

//Pobieranie danych
function GET(email)
{
  const db = getDatabase()
  const distanceRef = ref(db, 'users/'+ email + '/distance')

  onValue(distanceRef, (snapshot)=>{
    const data = snapshot.val()
    updateDistance(postElement, data)
  })
}

export {auth};