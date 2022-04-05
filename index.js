const NotesModel = require('./notesModel')

const notes = new NotesModel()

notes.addNote('first note')
console.log(notes.getNotes())
console.log('The notes app is running')
