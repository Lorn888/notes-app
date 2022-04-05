class NotesModel {

    constructor() {
        this.notes = []
        
    }
    getNotes() {
        return this.notes
    }

    addNote(item) {
        return this.notes.push(item)
    }

    reset() {
        return this.notes = []
    }
}

module.exports = NotesModel