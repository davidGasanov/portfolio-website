import React from "react";

import styles from "./Contact.module.css";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function index() {
  return (
    <section id="contact" className={`${styles.section}`}>
      <div data-aos="fade-down">
        <h1 className={`${styles.title}`}>CONTACT ME</h1>
        <h2 className={`${styles.subtitle}`}>
          I am looking forward to working on amazing projects with you!
        </h2>
      </div>
      <ul data-aos="zoom-in" className={`${styles.links}`}>
        <li className={`${styles.link}`}>
          <a target="_blank" href="mailto:davit.gasanov@protonmail.com">
            <MdEmail className={styles.contactIcon} size={70} />
          </a>
          <span className={styles.contactInfo}>
            davit.gasanov@protonmail.com
          </span>
        </li>
        <li className={`${styles.link}`}>
          <a target="_blank" href="https://github.com/davidGasanov/">
            <BsGithub className={styles.contactIcon} size={70} />
          </a>
          <span className={styles.contactInfo}>
            https://github.com/davidGasanov/
          </span>
        </li>
        <li className={`${styles.link}`}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/davit-gasanov-5265b2228/"
          >
            <BsLinkedin className={styles.contactIcon} size={70} />
          </a>
          <span className={styles.contactInfo}>
            https://www.linkedin.com/in/davit-gasanov-5265b2228/
          </span>
        </li>
      </ul>
      <a className={`${styles.downLink}`}>
        <u>Download my CV</u>
      </a>
    </section>
  );
}

export default index;
