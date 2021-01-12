import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA4jA_FCXtVJYTswmEQ82fwP8_UEMJ7xFM',
  authDomain: 'react-notes-27bc6.firebaseapp.com',
  databaseURL: 'https://react-notes-27bc6.firebaseio.com',
  projectId: 'react-notes-27bc6',
  storageBucket: 'react-notes-27bc6.appspot.com',
  messagingSenderId: '802216494874',
  appId: '1:802216494874:web:843088f3aa7411ca40cea3',
  measurementId: 'G-KXFT5LHVS9',
}

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb
