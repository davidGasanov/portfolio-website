import React from "react";
import styles from "./Split-section.module.css";



function Welcome() {
  return (
    <section id="home" className={styles.section}>
      <div className={`${styles.splitSection} ${styles.bgPrimary}`}>
        <div className={`${styles.nameDesc}`}>
          <h1 className={`${styles.devName}`}>DAVID GASANOV</h1>
          <h2 className={`${styles.devDesc}`}>WEB DESIGN AND DEVELOPMENT</h2>
        </div>

        <p>My name is David Gasanov, I am a front-end web developer.</p>
        <p>This is my website where i share my work and personal information. If you have any questions or requests, please feel free to contact me</p>

        <hr className={`${styles.line}`} />
      </div>

      <div className={`${styles.splitSection} ${styles.bgPattern}`}>
        <ul className={`${styles.pageNavigation}`}>
          <li className={`${styles.navButton}`}>ABOUT</li>
          <li className={`${styles.navButton}`}>WORK</li>
          <li className={`${styles.navButton}`}>CONTACT</li>
        </ul>
      </div>
    </section>
  );
}

export default Welcome;
