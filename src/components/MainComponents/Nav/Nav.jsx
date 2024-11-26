import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      {/* className={css.navigator} */}
      <ul>
        {/* className={css.container} */}
        <li>
          {/* className={getLinkClass} */}
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/notices">Find pet</NavLink>
        </li>
        <li>
          <NavLink to="/friends">Our friends</NavLink>
        </li>
      </ul>
    </nav>
  );
}
