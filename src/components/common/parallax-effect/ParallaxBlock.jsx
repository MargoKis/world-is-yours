import React from "react";
import ParallaxBG from "../../../assets/images/parallax-bg.jpg";
import styles from "./parallax.module.css";

export const ParallaxBlock = () => {
  return (
    <>
      <div>
        <div className={`${styles.wrapper} ${styles.parallax}`}>
          <div
            className={`${styles["parallax-layer"]} ${styles["parallax-image"]}`}
          >
            <img
              src={ParallaxBG}
              alt="scenery of lake and mountains"
              className={styles.img}
            />
          </div>
          <p
            className={`${styles["parallax-layer"]} ${styles["parallax-text"]}`}
          >
            "Подорожі навчають більше, ніж будь-що інше. Іноді один день,
            проведений в інших місцях, дає більше, ніж десять років життя вдома"
            <br />
          </p>
          <p
            className={`${styles["parallax-layer"]} ${styles["parallax-text"]} ${styles["author"]}`}
          >
            ~Анатоль Франс
          </p>
        </div>
      </div>
    </>
  );
};
