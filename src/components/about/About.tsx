import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./about.module.scss";
import { useClickContext } from "../../shared/contexts/ClickContext/ClickContext";

export const About: React.FC = () => {
  const typography = useSelector((state: RootState) => state.typography.data.about);
  const media = useSelector((state: RootState) => state.media.data.about);
  const { triggerClick } = useClickContext();

  if (!typography || !media) {
    return null;
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__content}>
        <h1 className={styles.about__title}>
          {typography?.title ?? "ABOUT US"}
        </h1>

        <img
          src={media?.aboutImage ?? "./images/about.png"}
          alt="image"
          className={styles.about__image}
        />

        <p className={styles.about__text}>
          {typography?.text ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        </p>
        <p className={styles.about__subText}>
          {typography?.["sub-text"] ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        </p>

        <button onClick={() => triggerClick()} className={styles.about__button}>
          {typography?.button ?? "LEARN MORE"}
        </button>
      </div>
    </section>
  );
};
