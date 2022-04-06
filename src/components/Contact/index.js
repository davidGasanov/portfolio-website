import React from "react";

import styles from "./Contact.module.css";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function index() {
  return (
    <section className={`${styles.section}`}>
      <div>
        <h1 className={`${styles.title}`}>CONTACT ME</h1>
        <h2 className={`${styles.subtitle}`}>
          I am looking forward to working on amazing projects with you!
        </h2>
      </div>
      <ul className={`${styles.links}`}>
        <li className={`${styles.link}`}>
          <a>
            <MdEmail size={70} />
          </a>
        </li>
        <li className={`${styles.link}`}>
          <a>
            <BsGithub size={70} />
          </a>
        </li>
        <li className={`${styles.link}`}>
          <a>
            <BsLinkedin size={70} />
          </a>
        </li>
      </ul>
      <a className={`${styles.downLink}`}>
        <u>Download my CV</u>
      </a>
    </section>
  );
}

export default index;
