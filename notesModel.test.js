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
    
    test('adding a note', () => {
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
    })

    test('empties the notes', () => {
      model.addNote('Buy milk');
      expect(model.getNotes()).toEqual(['Buy milk'])
      model.reset()
      expect(model.getNotes()).toEqual([])
    })
})