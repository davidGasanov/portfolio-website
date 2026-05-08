import { twMerge } from "tailwind-merge";
import Container from "../../components/container";
import { ExperienceTimeline } from "./timeline-wrapper";

import { Fade, Slide } from "react-awesome-reveal";
import { experienceData } from "./experience.constant";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full overflow-clip min-h-screen bg-linear-to-b from-dark-secondary/25 to-dark-secondary/45 relative"
    >
      <div className="absolute -bottom-[350px] left-1/2 -translate-x-1/2 w-[1047px] h-[448px] bg-dark-secondary rounded-[1047px] blur-[100px] -z-10" />
      <div className="absolute -bottom-[350px] -left-[100px] w-[407px] h-[448px] bg-primary/25 rounded-[407px] blur-[100px] -z-10" />
      <div className="absolute top-0 -left-[250px] w-[560px] h-[560px] bg-dark-secondary/25 rounded-[560px] blur-[100px] -z-10" />

      <Container className="pt-20 md:pt-24 pb-20 mt:pb-24 md:pb-[120px]">
        <div
          className={twMerge("flex flex-col gap-3 items-center text-center")}
        >
          <Fade triggerOnce>
            <Slide direction="up" triggerOnce>
              <h2 className="text-4xl md:h1-small font-bold font-montserrat text-primary uppercase">
                Experience
              </h2>
            </Slide>
          </Fade>
          <Fade triggerOnce>
            <Slide direction="up" triggerOnce>
              <h3 className="opacity-70 text-sm font-light max-w-[500px] xl:max-w-[480px] ">
                A record of my professional journey, highlighting continuous
                learning and practical problem-solving.
              </h3>
            </Slide>
          </Fade>
        </div>

        <ExperienceTimeline items={experienceData} />
      </Container>
    </section>
  );
};

export default ExperienceSection;
