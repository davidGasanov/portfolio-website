import React from "react";
import styles from "./Split-section.module.css";

function Welcome() {
  return (
    <section className={styles.section}>
      <div className={`${styles.splitSection} ${styles.bgPrimary}`}>
        <h1>Welcome</h1>
        <p>My name is David Gasanov. I design and develop websites.</p>
        <p>Below you will find some of my work and personal information.</p>
        <p>
          Should you have any inquiries or questions, feel free to contact me
          via the provided channels on the “contact” page.{" "}
        </p>
        <hr className={`${styles.line}`}/>
      </div>

      <div className={`${styles.splitSection} ${styles.bgPattern}`}>
        <ul className={`${styles.pageNavigation}`}>
          <li className={`${styles.largeText}`}>ABOUT</li>
          <li className={`${styles.largeText}`}>WORK</li>
          <li className={`${styles.largeText}`}>CONTACT</li>
        </ul>
      </div>
    </section>
  );
}

export default Welcome;
