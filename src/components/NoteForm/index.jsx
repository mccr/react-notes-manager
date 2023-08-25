import { PencilFill, TrashFill } from "react-bootstrap-icons";
import style from "./style.module.css";
import { ButtonPrimary } from "components/ButtonPrimary";
import { useState } from "react";

export const NoteForm = ({
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
  isEditable,
}) => {
  const [formValues, setFormValues] = useState({ title: "", content: "" });

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  const actionIcons = (
    <>
      <div className="col-1">
        <PencilFill className={style.icons} />
      </div>
      <div className="col-1">
        <TrashFill className={style.icons} />
      </div>
    </>
  );

  const titleInput = (
    <div className={`mb-3 ${style.title_input_container}`}>
      <label className="form-label">Title</label>
      <input
        name="title"
        type="text"
        className="form-control"
        placeholder="New Note"
        onChange={updateFormValues}
      />
    </div>
  );

  const contentInput = (
    <div className="mb-3">
      <label className="form-label">Content</label>
      <textarea
        name="content"
        className="form-control"
        rows="5"
        onChange={updateFormValues}
      />
    </div>
  );

  const submitButton = (
    <div className={style.button}>
      <ButtonPrimary onClick={() => onSubmit(formValues)}>
        save note
      </ButtonPrimary>
    </div>
  );

  return (
    <div className={style.container}>
      <div className="row justify-content-space-between">
        <h1 className="mb-3 col-10">{title}</h1>
        {isEditable && actionIcons}
      </div>

      <form className={style.form}>
        {titleInput}
        {contentInput}
        {submitButton}
      </form>
    </div>
  );
};
