import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./collection.module.scss";
import { useClickContext } from "../../shared/api/ClickContext/ClickContext";

export const Collection: React.FC = () => {
  const typography = useSelector(
    (state: RootState) => state.typography.data.collection
  );
  const media = useSelector((state: RootState) => state.media.data.collection);
  const { triggerClick } = useClickContext();

  if (!typography || !media) {
    return null;
  }

  return (
    <section id="blog" className={styles.collection}>
      <div className={styles.collection__content}>
        <h1 className={styles.collection__title}>
          {typography?.title ?? "NEW COLLECTION"}
        </h1>
        <div className={styles.collection__images}>
          {media ? (
            Object.values(media).map((image, index) => {
              return (
                <img
                key={index}
                onClick={() => triggerClick()}
                  src={image ?? `./images/collection_${index + 1}.png`}
                  alt="collection image"
                  className={`${styles.collection__image} ${
                    styles[`collection__image--${index + 1}`]
                  }`}
                />
              );
            })
          ) : (
            <p>loading</p>
          )}
        </div>

        <h3 className={styles.collection__subtitle}>
          {typography?.text ??
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        </h3>
      </div>
    </section>
  );
};
