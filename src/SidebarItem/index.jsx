
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { removeHTMLTags } from '../helpers';

class SidebarItem extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { classes, _note, _index, selectedNoteIndex, selectNote, deleteNote } = this.props

    return (
      <div key={_index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(_note, _index)}
          >
            <ListItemText
              primary={_note.title}
              secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'}
            />
          </div>
        </ListItem>
      </div>
    )
  }
}

export default withStyles(styles)(SidebarItem)