/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel')
 const NotesView = require('./notesView')

 describe('Page view', () => {

   
   it('displays 2 div notes in the document', () => {
     document.body.innerHTML = fs.readFileSync('./index.html')
      const model = new NotesModel
      const view = new NotesView(model)
      model.addNote('note 1')
      model.addNote('note 2')
      view.displayNotes()

     expect(document.querySelectorAll('.note').length).toBe(2)
   })
   test('text input and button to the web page', () => {
     document.body.innerHTML = fs.readFileSync('./index.html')
     const model = new NotesModel
     const view = new NotesView(model)
     const field = document.querySelector("#note-field")
     field.value = "new note"

     const addNoteButton = document.querySelector("#button")

     addNoteButton.click()

     expect(document.querySelectorAll('.note').length).toBe(1)

   })
 })

