import { useLocation } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import css from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  const logoVariant = location.pathname === "/home" ? "home" : "other";
  const isHome = location.pathname === "/home";

  return (
    <div className={css.container}>
      <header className={isHome ? css.headerHome : css.headerOther}>
        <Logo variant={logoVariant} />
        <Nav />
        <AuthNav />
      </header>
    </div>
  );
}
