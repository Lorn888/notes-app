const { TestWatcher } = require('jest');
const NotesModel = require('./notesModel');

describe('notes model', ()=>{
    let model;
    beforeEach(() => {
        model = new NotesModel();
    })
    test('.getNotes', ()=> {
      expect(model.getNotes()).toEqual([])
    })
})