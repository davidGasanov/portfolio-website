import React from "react";
import styles from "./Split-section.module.css";
import {SiAdobeillustrator} from 'react-icons/si';
import {SiAdobephotoshop} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {SiCss3} from 'react-icons/si';
import {SiHtml5} from 'react-icons/si';
import {SiReact} from 'react-icons/si';





function About() {
  return (
    <section className={`${styles.section} ${styles.sectionReverse}`}>
      <div className={`${styles.splitSection} ${styles.bgPrimary}`}>
        <h1>A little bit about me</h1>
        <p>
          I come from the Republic of Georgia, a beautiful country located on
          the eastern end of the black sea.{" "}
        </p>
        <p>
          In the middle of 2021, I began teaching myself the basics of graphic
          design and web development. I believe that learning is a constant
          process for developers. Therefore, I strive to work productively{" "}
        </p>
        <p>
          Moving forward, I aspire to become an excellent Front-end developer
          and web designer. For this reason, I put a lot of daily effort into
          acquiring new skills and knowledge.{" "}
        </p>
        <hr className={` ${styles.line} ${styles.lineRight}`} />
      </div>

      <div className={`${styles.splitSection} ${styles.bgPattern}`}>
        <h2 className={`${styles.largeText} ${styles.centered}`}>SKILL STACK</h2>
        <ul className={`${styles.skills}`}>
          <li><SiHtml5 size={'36px'}/></li>
          <li><SiCss3 size={'36px'}/></li>
          <li><SiJavascript size={'36px'}/></li>
          <li><SiReact size={'36px'}/></li>
          <li><SiAdobeillustrator size={'36px'}/></li>
          <li><SiAdobephotoshop size={'36px'}/></li>
        </ul>
      </div>
    </section>
  );
}

export default About;
