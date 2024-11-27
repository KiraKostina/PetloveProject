import { useNavigate } from "react-router-dom";
import Logo from "../../components/MainComponents/Logo/Logo";
import css from "./MainPage.module.css";

export default function MainPage() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <div className={css.main_page}>
      <div>Hello, pets!</div>
      <Logo onClick={handleLogoClick} />
    </div>
  );
}
