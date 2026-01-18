import type { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import Container from "../../components/container";
import { ProjectCard } from "./project-card";

export interface SkillType {
  title: string;
  description?: string;
  type: "container" | "child";
  Icon: IconType;
  children?: SkillType[];
  className?: string; // for styling
}

const projects = [
  {
    title: "Paws",
    description:
      "A full-stack e-commerce application featuring user authentication, product browsing with filtering and sorting, secure checkout flow, Stripe integration and order tracking. Built to demonstrate end-to-end application architecture and frontend integration with transactional workflows.",
    tech: ["NextJS", "Typescript", "Shadcn", "Stripe", "Prisma"],
    repoUrl: "https://github.com/davidGasanov/paws",
    liveUrl: "https://paws-tawny.vercel.app/",
    image: "/project-imgs/paws.png",
  },
  {
    title: "PayAPI",
    description:
      "A responsive, multi-page marketing website built with custom components, refined visual design, and validated form interactions, featuring a clean UI structure and reusable frontend patterns.",
    tech: [
      "React",
      "Typescript",
      "Tailwind",
      "React router",
      "React hook form",
    ],
    repoUrl: "https://github.com/davidGasanov/payapi-multi-page-website",
    liveUrl: "https://payapi-multi-page-website-eight.vercel.app/",
    image: "/project-imgs/pay-api.png",
  },
  {
    title: "Avorix",
    description:
      "A modern web platform built with custom components, form validation, and CMS-driven content, designed to showcase a scalable enterprise UI and organized content structure. The project features dynamic blog content managed via a CMS, validated interactive forms, and a cohesive, user-focused interface that reflects real-world product design principles.",
    tech: [
      "NextJS",
      "Typescript",
      "MUI",
      "Zod",
      "React hook form",
      "Sanity CMS"
    ],
    liveUrl: "https://avorix.com",
    image: "/project-imgs/avorix.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full min-h-screen bg-dark-secondary/0">
      <Container className="py-40">
        <div
          className={twMerge("flex flex-col gap-3 items-center text-center")}
        >
          <h1 className="text-4xl md:h1-small font-bold font-montserrat text-primary">
            PROJECTS
          </h1>
          <h2 className="opacity-70 font-light max-w-[500px] xl:max-w-[640px] ">
            A selection of projects showcasing my experience, problem-solving
            approach, and ongoing work.
          </h2>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
