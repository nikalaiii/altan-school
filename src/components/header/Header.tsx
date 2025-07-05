import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./header.module.scss";
import { useClickContext } from "../../shared/api/ClickContext/ClickContext";

export const Header: React.FC = () => {
  const typography = useSelector((state: RootState) => state.typography.data.header);
  const media = useSelector((state: RootState) => state.media.data.header);

  const { triggerClick } = useClickContext();

  if (!typography || !media) {
    return null;
  }
  
  return (
    <header id="home" className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__info}>
          <img
            src={media?.plantImage ?? "./images/plant_header.png"}
            className={styles.header__image}
            alt="plant"
          />

          <h1 className={styles.header__title}>
            {typography?.title ?? "Default title"}
          </h1>
          <div className={styles.header__wrapper}>
            <p className={styles.header__text}>
              {typography?.text ?? "Default text"}
            </p>

            <button onClick={() => triggerClick()} className={styles.header__button}>
              {typography?.button ?? "SHOP NOW"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
