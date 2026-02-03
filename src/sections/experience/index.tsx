import { twMerge } from "tailwind-merge";
import Container from "../../components/container";
import { ExperienceTimeline } from "./timeline-wrapper";

import { FaBuilding } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

export const experienceData = [
  {
    company: "Avorix",
    role: "Middle front-end developer",
    startDate: "Mar 2025",
    endDate: "Present",
    description:
      "Played a key role in the rebrand and redesign of avorix.com and its web app, delivering a modern, accessible UX. Built reusable React, TypeScript, and MUI 6 components, translated Figma designs into responsive interfaces, and optimized site performance and SEO. Contributed to component architecture, front-end best practices, and CI/CD workflow improvements while collaborating across design, backend, and QA teams.",
    technologies: [
      "React",
      "Nextjs",
      "Stripe",
      "Sanity",
      "Typescript",
      "AGILE",
      "Azure",
      "Accessibility",
      "SEO",
      "Github",
      "Redux",
      "MUI",
      "Tailwind",
    ],
    icon: <FaBuilding />,
  },
  {
    company: "Universal Transit",
    role: "Junior front-end developer",
    startDate: "Jun 2022",
    endDate: "Mar 2025",
    description:
      "Contributed to the redesign of universaltransit.com, improving performance, SEO, and user experience. Developed custom React components and a CMS for content management, and collaborated with cross-functional teams on shipment management software to enhance operational workflows. Actively participated in agile processes, code reviews, and sprint planning.",
    technologies: [
      "React",
      "Nextjs",
      "Typescript",
      "SEO",
      "Accessibility",
      "AGILE",
      "Vercel",
      "Azure",
      "Github",
      "Redux",
      "MUI",
      "Tailwind",
    ],
    icon: <FaBuilding />,
  },
];

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
