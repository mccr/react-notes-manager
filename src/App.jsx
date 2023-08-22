import { Outlet } from "react-router-dom";
import { Header } from "components/Header/index";
import { setNoteList } from "store/notes/notes-slice";
import { useDispatch } from "react-redux";
import { NoteAPI } from "api/note-api";
import { useEffect } from "react";

export function App() {
  const dispatch = useDispatch();

  async function fetchNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    fetchNotes();
  });

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
