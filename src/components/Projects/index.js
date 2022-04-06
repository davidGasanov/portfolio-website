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
    description: 'A timer app inspired by the famous "pomodoro technique"',
    image: pomodoro,
    githubUrl: "https://github.com/davidGasanov/Pomodoro-clock",
    liveUrl: "https://pomoclockdg.netlify.app/",
  },
  {
    title: "Random quote app",
    description:
      "A small but elegant app which generates an inspirational quote upon clicking",
    image: randomquote,
    githubUrl: "https://github.com/davidGasanov/random-quote-machine",
    liveUrl: "https://randomquotedg.netlify.app/",
  },
  {
    title: "Redberry form",
    description:
      "A small but elegant app which generates an inspirational quote upon clicking",
    image: rbform,
    githubUrl: "https://github.com/davidGasanov/redberry-form-responsive",
    liveUrl: "https://redberry-form-showcase.netlify.app/",
  },
];

function Projects() {
  return (
    <section className={`${styles.section}`}>
      <div>
        <h1 className={`${styles.centered}`}>Some of my work</h1>
        <h2 className={`${styles.mediumText} ${styles.centered}`}>
          Apps and websites which I developed
        </h2>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={100}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Skillcard {...projectList[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Skillcard {...projectList[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Skillcard {...projectList[0]} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Projects;
