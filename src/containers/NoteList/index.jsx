import { TextCard } from "components/TextCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const NoteList = () => {
  const noteList = useSelector((store) => store.noteSlice.noteList);

  const navigate = useNavigate();
  return (
    <div className="row justify-content-center">
      {noteList.map((note) => (
        <TextCard
          key={note.id}
          title={note.title}
          subtitle={note.created_at}
          content={note.content}
          onClick={() => navigate(`/note/${note.id}`)}
          onClickTrash={() => alert("click trash")}
        />
      ))}
    </div>
  );
};
