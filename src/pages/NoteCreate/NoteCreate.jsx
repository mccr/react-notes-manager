import { NoteForm } from "components/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NoteAPI } from "api/note-api";
import { addNote } from "store/notes/notes-slice";

export const NoteCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNewNote = async (formValues) => {
    const createdNote = await NoteAPI.create({
      title: formValues.title,
      content: formValues.content,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNote(createdNote));
    navigate("/");
  };
  return (
    <>
      <NoteForm
        title="Create note"
        onSubmit={createNewNote}
        isEditable={false}
      />
    </>
  );
};
