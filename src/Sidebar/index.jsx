
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../SidebarItem';

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      addingNote: false,
      title: null
    }
  }

  newNoteBtnClick = () => {
    console.log("NEW NOTE BUTTON CLICKED")
    this.setState({ title: null, addingNote: !this.state.addingNote })
  }
  updateTitle = (txt) => {
    this.setState({ title: txt })
  }
  newNote = () => {
    console.log(this.state)
  }
  selectNote = () => console.log("select note")
  deleteNote = () => console.log("delete note")

  render() {
    const { classes, notes, selectedNoteIndex } = this.props
    const { addingNote } = this.state

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button
            onClick={this.newNoteBtnClick}
            className={classes.newNoteBtn}
          >
            {!addingNote ? "New Note" : "Cancel"}
          </Button>
          {
            addingNote ? (
              <div>
                <input
                  type="text"
                  className={classes.newNoteInput}
                  placeholder="Enter note title"
                  onKeyUp={(e) => this.updateTitle(e.target.value)}
                />
                <Button
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote}
                >
                  SubmitNote
              </Button>
              </div>
            ) : null
          }
          <List>
            {
              notes.map((_note, _index) => {
                return (
                  <div key={_index}>
                    <SidebarItem
                      _note={_note}
                      _index={_index}
                      selectedNoteIndex={selectedNoteIndex}
                      selectNote={this.selectNote}
                      deleteNote={this.deleteNote}
                    />
                    <Divider />
                  </div>
                )
              })
            }
          </List>
        </div>
      )
    } else {
      return (<div />)
    }
  }
}

export default withStyles(styles)(Sidebar)