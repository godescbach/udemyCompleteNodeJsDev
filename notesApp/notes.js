const fs = require('fs')
const chalk = require('chalk')

// Utility functions used by exported functions
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString())
  } catch (e) {
    return []
  }
}

// Exported functions 
// Note operations add, remove, list, ..., etc.
const addNote = (title, body) => {
  const notes = loadNotes()
  // const duplicateNotes = notes.filter((note) => note.title === title)
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.inverse.green('Adding note with title, ' + title + ', and body, ' + body))
  } else {
    console.log(chalk.inverse.red('Note title taken!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  //console.log('Removing note "' + title + '"')
  const notesToKeep = notes.filter((note) =>note.title !== title)
  if(notes.length !== notesToKeep.length) {
    console.log(chalk.inverse.green('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.inverse.red('No note found!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.yellow.inverse('Your Notes:'))
  notes.forEach(note => console.log(chalk.blue('  Title: ' + note.title)))
}

const readNote = (title) => {
  const notes = loadNotes()
  note = notes.find((note) => note.title === title)
  if(note) {
    console.log(chalk.inverse('Title: ' + note.title))
    console.log('  Body: ' + note.body)
  } else {
    console.log(chalk.inverse.red('No note found!'))
  }
} 



module.exports = { 
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}