import HomeTitle from "../../components/ForHomePage/HomeTitle/HomeTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <div className={css.container}>
        <HomeTitle />
        <div>
          <img src="../../images/girl-dog-mob1x.jpg" alt="girl with dog" />
        </div>
      </div>
    </div>
  );
}
