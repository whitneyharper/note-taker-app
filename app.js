const textElement = document.querySelector('#note');

function saveNote() {
    if(textElement.value == " ") {
        return alert('text field is empty!');
    }
    const id = getNoteId();
    let noteObject = getExistingNotes();
    if(!noteObject) {
        noteObject = {};
    }
    noteObject[id] = textElement.value;
    localStorage.setItem('notes', JSON.stringify(noteObject));
    alert('Note Saved!');
}

function getExistingNotes() {
    let notes = localStorage.getItem('notes');
    if(!notes) {
        return null;
    }
    return JSON.parse(notes);
}

function getNoteId() {
    let existingNotes = getExistingNotes();
    if(!existingNotes) {
        return 1;
    }
    const arrayOfKeys = Object.keys(existingNotes);
    const keysNumber = arrayOfKeys.map(key => Number(key))
    console.log(keysNumber);
    return Math.max(...keysNumber) + 1;
}




