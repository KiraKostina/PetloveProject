import HomeTitle from "../../components/ForHomePage/HomeTitle/HomeTitle";
import css from "./HomePage.module.css";
import girlDogMob1x from "../../images/girl_dog_mob1x.jpg";

export default function HomePage() {
  return (
    <div>
      <div className={css.container}>
        <HomeTitle />
        <div>
          <img
            className={css.home_picture}
            src={girlDogMob1x}
            alt="girl with dog"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
