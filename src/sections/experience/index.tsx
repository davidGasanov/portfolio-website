import { twMerge } from "tailwind-merge";
import Container from "../../components/container";
import { ExperienceTimeline } from "./timeline-wrapper";

import { FaBuilding } from "react-icons/fa";

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
    <section className="w-full min-h-screen bg-dark-secondary/25">
      <Container className="pt-20 md:pt-24 pb-20 mt:pb-24">
        <div
          className={twMerge("flex flex-col gap-3 items-center text-center")}
        >
          <h2 className="text-4xl md:h1-small font-bold font-montserrat text-primary uppercase">
            Experience
          </h2>
          <h3 className="opacity-70 font-light max-w-[500px] xl:max-w-[640px] ">
            A record of my professional journey, highlighting continuous
            learning and practical problem-solving.
          </h3>
        </div>

        <ExperienceTimeline items={experienceData} />
      </Container>
    </section>
  );
};

export default ExperienceSection;
