import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import styles from "./navbar.module.scss";

export const NavBar: React.FC = () => {
  const typography = useSelector((state: RootState) => state.typography.data.header);
  const media = useSelector((state: RootState) => state.media.data.navbar);

  if (!typography || !media) {
    return null;
  }

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.nav__title}>
        {typography?.logoName ?? "ALTANSCHOOL WEB COURSES"}
      </a>
      <a href="/" className={styles.nav__menuLink}>
        <img
          src={media?.burgerMenu ?? "./images/burger-menu.png"}
          alt="menu"
          className={styles.nav__menuIcon}
        />
      </a>

      <div className={styles.nav__links}>
        {typography?.links?.map((link: string) => {
          return (
            <a key={link} className={styles.nav__link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
