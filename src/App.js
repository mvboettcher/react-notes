import React, { Component } from 'react'
import './App.css';

import firebase from 'firebase'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  componentDidMount() {
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
        this.setState({ notes: notes })
      })
  }

  render() {
    return (
      <div>
        React App
      </div>
    )
  }
}

export default App;
