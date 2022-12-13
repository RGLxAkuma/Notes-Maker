import NoteItem from "./NoteItem";
import Note from "../Models/Note";
import "./Notes.css"

const Notes: React.FC<{ items: Note[]; onDeleteNoteHandler: (id:string)=>void}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <NoteItem title={item.title} text={item.text} key={item.id} onDeleteNoteHandler={props.onDeleteNoteHandler.bind(null , item.id)}></NoteItem>
      ))}
    </ul>
  );
};

export default Notes;
