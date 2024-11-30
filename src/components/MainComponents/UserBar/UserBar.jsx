import { NavLink } from "react-router-dom";

export default function UserBar() {
  return (
    <>
      {/* className={css.navigator} */}
      <ul>
        {/* className={css.container} */}
        <li>
          {/* className={getLinkClass} */}
          <NavLink to="/profile">Name</NavLink>
        </li>
      </ul>
    </>
  );
}
