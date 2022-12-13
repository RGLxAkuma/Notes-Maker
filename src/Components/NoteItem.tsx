import "./NoteItem.css"

const NoteItem: React.FC<{ title: string; text: string; onDeleteNoteHandler: ()=>void }> = (props) => {

  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <button onClick={props.onDeleteNoteHandler}>Delete</button>
    </li>
  );
};

export default NoteItem;
