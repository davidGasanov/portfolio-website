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
      <button className={`${styles.button} ${styles.bgLight}`}>
        <a className={styles.link} href={liveUrl} target="_blank">
          Live Version
        </a>
      </button>
      <button className={`${styles.button} ${styles.bgDark}`}>
        <a className={styles.link} href={githubUrl} target="_blank">
          Github page
        </a>
      </button>
    </div>
  );
}

export default index;
