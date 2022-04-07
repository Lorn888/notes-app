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

     expect(document.querySelectorAll('div.note').length).toBe(2)
   })
 })

