import React, { useState } from "react";
import Notes from "./Components/Notes";
import Note from "./Models/Note";
import "./App.css";
import NoteInput from "./Components/NoteInput";

function App() {
  const [NoteItems, setNoteItems] = useState<Note[]>([]);

  const addNoteHandler = (Notetitle: string, Notetext: string) => {
    const newNote = new Note(Notetitle, Notetext);

    setNoteItems((prevNotes) => {
      return prevNotes.concat(newNote);
    });
  };


  const deleteNoteHandler = (NoteId:string)=>{
    setNoteItems((prevNotes) =>{
      return prevNotes.filter(note => note.id !== NoteId)
    })
  }
  return (
    <div className="App">
      <div className="title__main"><h1>Notes Maker</h1></div>
      <NoteInput onAddNote={addNoteHandler}></NoteInput>
      <Notes items={NoteItems} onDeleteNoteHandler={deleteNoteHandler}></Notes>
    </div>
  );
}

export default App;
