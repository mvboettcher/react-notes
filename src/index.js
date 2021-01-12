import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDswl7oeL7wdzzr9tzmInnnTwZ1_vPJQ5c',
  authDomain: 'react-electron-notes.firebaseapp.com',
  databaseURL: 'https://react-electron-notes.firebaseio.com',
  projectId: 'react-electron-notes',
  storageBucket: 'react-electron-notes.appspot.com',
  messagingSenderId: '215904126282',
  appId: '1:215904126282:web:637f159ba19e0e4cadadb3',
  measurementId: 'G-JCCFP2P0V8',
})
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
