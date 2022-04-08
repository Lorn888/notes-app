const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()
describe ('NotesApi class', () => {
  it('it calls fetch and loads notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
    note: "learn react"
    }));
    api.loadNotes((notesInfo) =>{
      expect(notesInfo.note).toBe("learn react");
    })
  })
})