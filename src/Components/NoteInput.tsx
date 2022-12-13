import { useRef } from "react";
import "./NoteInput.css"

const NoteInput: React.FC<{
  onAddNote: (title: string, text: string) => void;
}> = (props) => {
  const noteTitleInputRef = useRef<HTMLInputElement>(null);
  const noteTextInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = noteTitleInputRef.current!.value;
    const enteredText = noteTextInputRef.current!.value;

    if (enteredText!.trim().length === 0 || enteredTitle.trim().length === 0) {
        alert("all Fields are mandatory");
      return;
    }

    props.onAddNote(enteredTitle, enteredText);

    noteTitleInputRef.current!.value="";
    noteTextInputRef.current!.value="";
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" ref={noteTitleInputRef}></input>
      <label htmlFor="text">Content</label>
      <textarea id="text" ref={noteTextInputRef}></textarea>
      <button>Submit</button>
    </form>
  );
};

export default NoteInput;
