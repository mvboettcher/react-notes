import React, { Component } from 'react'
import Editor from './Editor'
import Sidebar from './Sidebar'
import './App.css';
import firebase from 'firebase'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedNoteIndex: null,
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
    const { notes, selectedNoteIndex } = this.state
    return (
      <div className='app-container'>
        <Sidebar
          notes={notes}
          selectedNoteIndex={selectedNoteIndex}
        />
        <Editor />
      </div>
    )
  }
}

export default App;
