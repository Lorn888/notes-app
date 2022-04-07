const NotesModel = require('./notesModel')
const NotesViev = require('./notesView')
const model = new NotesModel()
const view = new NotesViev(model)

console.log(model.getNotes())
console.log('The notes app is running')


