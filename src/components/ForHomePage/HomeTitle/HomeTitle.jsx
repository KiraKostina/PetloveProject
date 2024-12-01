import css from "./HomeTitle.module.css";

export default function HomeTitle() {
  return (
    <>
      <div className={css.home_title_container}>
        <h1 className={css.home_title}>
          Take good <span className={css.span_title}>care</span> of your small
          pets
        </h1>
        <p className={css.home_overview}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
    </>
  );
}
