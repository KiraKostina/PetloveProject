import { Outlet } from "react-router-dom";
import Header from "../MainComponents/Header/Header";

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
