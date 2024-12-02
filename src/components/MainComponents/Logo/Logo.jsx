import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import sprite from "../../../assets/sprite.svg";

export default function Logo({ variant = "main" }) {
  const logoTextClass = css[`text_${variant}`];
  const heartClass = css[`heart_${variant}`];

  return (
    <>
      <Link to="/home">
        <div className={css.logo}>
          <p className={logoTextClass}>petl</p>
          <svg className={heartClass}>
            <use href={`${sprite}#icon-heart-circle`} />
          </svg>
          <p className={logoTextClass}>ve</p>
        </div>
      </Link>
    </>
  );
}
