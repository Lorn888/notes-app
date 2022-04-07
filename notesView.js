class NotesViev{
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }
  displayNotes() {

    this.model.getNotes().forEach(notes => {
      const div = document.createElement('div');
      div.innerHTML = notes;
      div.className = "note"
      this.mainContainerEl.append(div);
    });
  }
}


// class NotesView {
//   constructor(model) {
//     this.model = model;
//     this.mainContainerEl = document.querySelector('#main-container');
//   }
  
//   displayNotes() {
//     const notes = this.model.getNotes()

//     // For each note, create and append a new element on the main container
//     notes.forEach(note => {
//       const noteEl = document.createElement('div');
//       noteEl.innerText = note;
//       noteEl.className = 'note';
//       this.mainContainerEl.append(noteEl);
//     })
//   }
// }

// module.exports = NotesView;


module.exports = NotesViev