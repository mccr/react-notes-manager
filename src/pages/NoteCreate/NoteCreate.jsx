import { NoteForm } from "components/NoteForm";
import { useDispatch } from "react-redux";
import { addNote } from "store/notes/notes-slice";

export const NoteCreate = () => {
  const dispatch = useDispatch();

  const createNewNote = (formValues) => {
    dispatch(
      addNote({
        title: formValues.title,
        content: formValues.content,
        created_at: new Date().toLocaleString(),
      })
    );
  };
  return (
    <>
      <NoteForm title="Create note" onSubmit={createNewNote} />
    </>
  );
};
