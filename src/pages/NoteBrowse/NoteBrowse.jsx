import { TextCard } from "components/TextCard";

export const NoteBrowse = () => {
  const noteDetails = () => {
    console.log("Note Details");
  };

  const removeNote = () => {
    console.log("delete note");
  };

  return (
    <div>
      note browse
      <TextCard
        title="Super Note"
        date="31/08/2023"
        content="This is the content"
        onClick={noteDetails}
        onClickTrash={removeNote}
      />
    </div>
  );
};
