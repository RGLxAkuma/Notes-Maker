class Note {
    id : string;
    title:string;
    text:string;

    constructor(NoteTitle:string , NoteText:string)
    {
        this.title = NoteTitle;
        this.text = NoteText;
        this.id = new Date().toISOString();
    }
}

export default Note