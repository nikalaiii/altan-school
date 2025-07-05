import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./follow.module.scss";
import { useClickContext } from "../../shared/contexts/ClickContext/ClickContext";

export const Follow: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const typography = useSelector(
    (state: RootState) => state.typography.data.follow
  );
  const media = useSelector((state: RootState) => state.media.data.follow);
  const { triggerClick } = useClickContext();

  if (!typography || !media) {
    return null;
  }

  return (
    <footer id="contacts" className={styles.follow}>
      <div className={styles.follow__content}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setName('');
            setEmail('');
            setMessage('');
            triggerClick();
          }}
          className={styles.follow__form}
        >
          <h1 className={styles.follow__title}>
            {typography?.title ?? "FOLLOW US"}
          </h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className={styles.follow__input}
            placeholder={typography?.inputName ?? "Enter your name"}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className={styles.follow__input}
            placeholder={
              typography?.inputEmail ?? "Enter a valid email address"
            }
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${styles.follow__input} ${styles["follow__input--area"]}`}
            placeholder={typography?.inputMessage ?? "Enter your message"}
          />

          <button type="submit" className={styles.follow__button}>
            {typography?.button ?? "SUBMIT"}
          </button>
        </form>
        <img
          src={media?.followImage ?? "./images/follow.png"}
          className={styles.follow__image}
          alt="follow us"
        />
      </div>
    </footer>
  );
};
