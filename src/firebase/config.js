import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-WHLqRtvlMN5WHl2WOn95ZqOH7hZNqvE",
  authDomain: "olx-clone-465f5.firebaseapp.com",
  projectId: "olx-clone-465f5",
  storageBucket: "olx-clone-465f5.appspot.com",
  messagingSenderId: "217889814009",
  appId: "1:217889814009:web:a3c5d8cf1033fc3071f928",
  measurementId: "G-KW2TFHEPLP"
};

  export default firebase.initializeApp(firebaseConfig)

  