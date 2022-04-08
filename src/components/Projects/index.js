import React from "react";

import styles from "./Projects.module.css";
import "../swiper-styles.css";

import pomodoro from "../../imgs/pomoclock.PNG";
import randomquote from "../../imgs/randomquote.PNG";
import rbform from "../../imgs/rbform.PNG";

import Skillcard from "../Skillcard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const projectList = [
  {
    title: "Pomodoro timer",
    description:
      'A timer app for productivity. Inspired by the famous "Pomodoro" technique.',
    image: pomodoro,
    githubUrl: "https://github.com/davidGasanov/Pomodoro-clock",
    liveUrl: "https://pomoclockdg.netlify.app/",
  },
  {
    title: "Random quote app",
    description:
      "A small but elegant app that generates inspirational quotes upon clicking.",
    image: randomquote,
    githubUrl: "https://github.com/davidGasanov/random-quote-machine",
    liveUrl: "https://randomquotedg.netlify.app/",
  },
  {
    title: "Redberry form",
    description:
      "A responsive form with validation which I made for the Redberry Bootcamp project. Disclaimer: does not submit data to an API.",
    image: rbform,
    githubUrl: "https://github.com/davidGasanov/redberry-form-responsive",
    liveUrl: "https://redberry-form-showcase.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className={`${styles.section}`}>
      <div data-aos="fade-down">
        <h1 className={`${styles.centered} ${styles.largeText}`}>
          Some of my work
        </h1>
        <h2 className={`${styles.mediumText} ${styles.centered}`}>
          Apps and websites which I developed
        </h2>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        data-aos="fade-up"
      >
        {projectList.map((project) => (
          <SwiperSlide>
            <Skillcard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
