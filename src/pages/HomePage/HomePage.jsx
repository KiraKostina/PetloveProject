import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <div className={css.container}>
        <div>
          <h1>
            Take good <span>care</span> of your small pets
          </h1>
          <p>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div>
          <img src="" alt="girl with dog" />
        </div>
      </div>
    </div>
  );
}
