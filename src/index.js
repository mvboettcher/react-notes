import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyA4jA_FCXtVJYTswmEQ82fwP8_UEMJ7xFM",
  authDomain: "react-notes-27bc6.firebaseapp.com",
  databaseURL: "https://react-notes-27bc6.firebaseio.com",
  projectId: "react-notes-27bc6",
  storageBucket: "react-notes-27bc6.appspot.com",
  messagingSenderId: "802216494874",
  appId: "1:802216494874:web:843088f3aa7411ca40cea3",
  measurementId: "G-KXFT5LHVS9"
});
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);