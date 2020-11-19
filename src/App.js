import React, { useState, useEffect } from 'react'
import './App.css';

import firebase from 'firebase'

const App = () => {
  const [state, setState] = useState({
    selectNoteIndex: null,
    selectedNote: null,
    notes: null
  })

  useEffect(() => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data()
          data['id'] = _doc.id
          return data
        })
        console.log(notes)
        setState({ notes: notes })
      })
  }, [])

  return (
    <div>
      <h1>
        React Notes App
      </h1>
    </div>
  )
}

export default App;
