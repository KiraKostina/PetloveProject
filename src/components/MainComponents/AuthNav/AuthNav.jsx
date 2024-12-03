import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <nav>
      {/* className={css.navigator} */}
      <ul>
        {/* className={css.container} */}
        <li>
          <NavLink className={css.navLink} to="/login">
            <p>Log in</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/register">
            <p>Registration</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
