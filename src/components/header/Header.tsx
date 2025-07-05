import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./header.module.scss";
import { useClickContext } from "../../shared/contexts";
import { LoadingSpinner } from "../../shared/components";

export const Header: React.FC = React.memo(() => {
  const { data: typography, loading: typographyLoading, error: typographyError } = useSelector((state: RootState) => state.typography);
  const { data: media, loading: mediaLoading, error: mediaError } = useSelector((state: RootState) => state.media);
  const { triggerClick } = useClickContext();

  // Loading state
  if (typographyLoading || mediaLoading) {
    return (
      <header id="home" className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__info}>
            <div className={styles.header__loading}>
              <LoadingSpinner size="large" />
              <p>Loading content...</p>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Error state
  if (typographyError || mediaError) {
    return (
      <header id="home" className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__info}>
            <div className={styles.header__error}>
              Error loading content. Please refresh the page.
            </div>
          </div>
        </div>
      </header>
    );
  }

  // No data state
  if (!typography?.header || !media?.header) {
    return null;
  }
  
  return (
    <header id="home" className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__info}>
          <img
            src={media.header.plantImage ?? "./images/plant_header.png"}
            className={styles.header__image}
            alt="plant"
          />

          <h1 className={styles.header__title}>
            {typography.header.title ?? "Default title"}
          </h1>
          <div className={styles.header__wrapper}>
            <p className={styles.header__text}>
              {typography.header.text ?? "Default text"}
            </p>

            <button onClick={() => triggerClick()} className={styles.header__button}>
              {typography.header.button ?? "SHOP NOW"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
