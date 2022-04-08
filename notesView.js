class NotesViev{
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButton = document.querySelector("#button");
    this.addNoteButton.addEventListener("click", () => {
      let fieldEl = document.querySelector('#note-field');
      this.model.addNote(fieldEl.value);
      if (fieldEl.value != "") {
        this.displayNotes();
      }
      fieldEl.value = "";
    })
  }
  displayNotes() {
    // console.log(document.querySelectorAll('div')); 
    
    const notes = document.querySelectorAll('.note'); 
    this.mainContainerEl.innerHTML = ""
    // notes.forEach(note => {
    //   note.remove();
    // });

    this.model.getNotes().forEach(notes => {
      const div = document.createElement('div');
      div.innerHTML = notes;
      div.className = "note";
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