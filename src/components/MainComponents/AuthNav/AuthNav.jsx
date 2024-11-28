import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav>
      {/* className={css.navigator} */}
      <ul>
        {/* className={css.container} */}
        <li>
          {/* className={getLinkClass} */}
          <NavLink to="/login">Log in</NavLink>
        </li>

        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
      </ul>
    </nav>
  );
}
