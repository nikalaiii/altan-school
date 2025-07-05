import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./categories.module.scss";
import { useClickContext } from "../../shared/api/ClickContext/ClickContext";

export const Categories: React.FC = () => {
  const typography = useSelector(
    (state: RootState) => state.typography.data.categories
  );
  const media = useSelector((state: RootState) => state.media.data.categories);
  const { triggerClick } = useClickContext();

  if (!typography || !media) {
    return null;
  }

  return (
    <section id="shop" className={styles.categories}>
      <div className={styles.categories__content}>
        <h1 className={styles.categories__title}>
          {typography?.title ?? "SHOP BY CATEGORIES"}
        </h1>

        <div className={styles.categories__images}>
          {media ? (
            Object.values(media).map((image, index) => {
              return (
                <img
                  onClick={() => triggerClick()}
                  key={index}
                  src={image ?? `./images/category_${index + 1}.png`}
                  className={`${styles.categories__image} ${
                    styles[`categories__image--${index + 1}`]
                  }`}
                  alt="category"
                />
              );
            })
          ) : (
            <p> loading</p>
          )}
        </div>
      </div>
    </section>
  );
};
