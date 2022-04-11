import React from "react";
import styles from "./Split-section.module.css";
import Link from "react-scroll/modules/components/Link";

import { ReactComponent as Logocolor } from "../imgs/logo_color.svg";

function Welcome() {
  return (
    <section id="home" className={styles.section}>
      <div className={`${styles.splitSection} ${styles.bgPrimary}`}>
        <div data-aos="fade-right">
          <div className={`${styles.nameDesc}`}>
            <Logocolor className={styles.logo}/>
            <div>
              <h1 className={`${styles.devName}`}>DAVID GASANOV</h1>
              <h2 className={`${styles.devDesc}`}>
                Web design and development.
              </h2>
            </div>
          </div>

          <p>My name is David Gasanov. I am a front-end web developer.</p>
          <p>
            This is my website where I share my work and personal information.
            If you have any questions or requests, please feel free to contact
            me
          </p>
        </div>
        <hr
          data-aos-duration="2500"
          data-aos="slide-right"
          className={`${styles.line}`}
        />
      </div>

      <div className={`${styles.splitSection} ${styles.bgPattern}`}>
        <ul
          data-aos-delay="500"
          data-aos="fade-left"
          className={`${styles.pageNavigation}`}
        >
          <Link smooth={true} duration={1000} to="about">
            <li className={`${styles.navButton}`}>ABOUT</li>
          </Link>
          <Link smooth={true} duration={1000} to="projects">
            <li className={`${styles.navButton}`}>WORK</li>
          </Link>
          <Link smooth={true} duration={1000} to="contact">
            <li className={`${styles.navButton}`}>CONTACT</li>
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default Welcome;
