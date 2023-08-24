import style from "./style.module.css";
import { Trash } from "react-bootstrap-icons";

export const TextCard = ({ title, date, content, onClick, onClickTrash }) => {
  const onClickTrash_ = (e) => {
    onClickTrash();
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={`card ${style.container}`}
        style={{ width: "18rem" }}
        onClick={onClick}
      >
        <div className="card-body">
          <div className={style.title_row}>
            <h5 className="card-title">{title}</h5>
            <Trash
              size={20}
              className={style.tras_icon}
              onClick={onClickTrash_}
            />
          </div>

          <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
          <p className={style.text_content}>{content}</p>
        </div>
      </div>
    </>
  );
};
