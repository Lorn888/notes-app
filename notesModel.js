class NotesModel {

    constructor() {
        this.notes = []
        
    }
    getNotes() {
        return this.notes
    }

    addNote(item) {
        this.notes.push(item)
    }

    reset() {
        return this.notes = []
    }

    setNotes(notesInfo) {
        this.notes = notesInfo
    }
}

module.exports = NotesModel