import style from "./style.module.css";
import { Logo } from "components/Logo/index";
import { ButtonPrimary } from "components/ButtonPrimary/index";
import logoSrc from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={`row ${style.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          image={logoSrc}
          title="Notomatic"
          subtitle="Manage your notes"
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/new")}>
          new note &#43;
        </ButtonPrimary>
      </div>
    </div>
  );
};
