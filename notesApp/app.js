// const validator = require('validator')
// import validator from 'validator'; // DOES NOT WORK
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

commandParameters = [
  {
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
      }

    },
    handler(argv) {
      notes.addNote(argv.title, argv.body)
      // console.log('Title: ' + argv.title)
      // console.log('Body: ' + argv.title)
    }
  },
  {
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      notes.removeNote(argv.title)
    },
  },
  {
    command: 'list',
    describe: 'List notes',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      notes.listNotes()
    }
  },
  {
    command: 'read',
    describe: 'Read a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      }
    },
    handler(argv) {
      notes.readNote(argv.title)
    },
  },
]

for (let i = 0; i < commandParameters.length; i++) {
  yargs.command({
    command: commandParameters[i].command,
    describe: commandParameters[i].describe,
    builder: commandParameters[i].builder,
    handler: commandParameters[i].handler
  })

}
// Create add command

// add, remove, read, list

yargs.parse()
// console.log(yargs.argv)
// const command = process.argv[2]

// if (command === 'add') {
//   console.log('Adding note ... ')
// } else if (command === 'remove') {
//   console.log('Removing note ...')
// }
