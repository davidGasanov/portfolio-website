import React from "react";
import styles from "./Skillcard.module.css";

function index({ image, title, description, githubUrl, liveUrl }) {
  console.log(image, title, description, githubUrl, liveUrl);
  return (
    <div className={`${styles.container}`}>
      <img className={`${styles.image}`} src={image} />
      <div className={`${styles.titleDesc}`}>
        <h3 className={`${styles.title}`}>{title}</h3>
        <p className={`${styles.description}`}>{description}</p>
      </div>
      <a
        className={` ${styles.bgLight} ${styles.button}`}
        href={liveUrl}
        target="_blank"
      >
        Live Version
      </a>
      <a
        className={`${styles.button} ${styles.bgDark} `}
        href={githubUrl}
        target="_blank"
      >
        Github page
      </a>
    </div>
  );
}

export default index;
