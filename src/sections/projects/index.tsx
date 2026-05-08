import type { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import Container from "../../components/container";
import { ProjectCard } from "./project-card";
import { Fade, Slide } from "react-awesome-reveal";

export interface SkillType {
  title: string;
  description?: string;
  type: "container" | "child";
  Icon: IconType;
  children?: SkillType[];
  className?: string; // for styling
}

type ProjectVariant = "default" | "wip";

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  variant?: ProjectVariant;
}

const projects: ProjectItem[] = [
  {
    title: "Eka's Bakery",
    description:
      "A full-stack Next.js WIP with an admin panel for product creation and deletion, a scalable Prisma-managed backend, dynamic product pages, and SEO optimization; Stripe payments and user authentication are planned next.",
    tech: ["NextJS", "Typescript", "Tailwind", "Prisma"],
    liveUrl: "https://ekas-bakery.vercel.app",
    image: "/project-imgs/ekas-bakery.png",
    variant: "wip",
  },
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
    title: "Avorix Auto Transport",
    description:
      "SEO-focused auto transport platform with scalable service and route pages, plus a quote calculator driven by complex pricing logic and third-party API integrations.",
    tech: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "Zod",
      "Yup",
      "Sanity CMS",
    ],
    liveUrl: "https://avorixautotransport.com",
    image: "/project-imgs/aat.png",
  },
  {
    title: "Avorix.com",
    description:
      "A modern web platform built with custom components, form validation, and CMS-driven content, designed to showcase a scalable enterprise UI and organized content structure. The project features dynamic blog content managed via a CMS, validated interactive forms, and a cohesive, user-focused interface that reflects real-world product design principles.",
    tech: [
      "NextJS",
      "Typescript",
      "MUI",
      "Zod",
      "React hook form",
      "Sanity CMS",
    ],
    liveUrl: "https://avorix.com",
    image: "/project-imgs/avorix.png",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-linear-to-b to-dark-secondary/0 from-dark-secondary/25 relative"
    >
      <div className="absolute inset-0 w-full h-full overflow-clip">
        <div
          className="absolute top-[140px] -right-[400px] w-[840px] h-[840px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float-slow 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-[540px] -right-[400px] w-[840px] h-[840px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float-slow 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-[540px] right-[100px] w-[840px] h-[840px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float-slow 30s ease-in-out infinite",
          }}
        />
      </div>
      <Container className="py-40">
        <div
          className={twMerge("flex flex-col gap-3 items-center text-center")}
        >
          <Fade triggerOnce>
            <Slide direction="up" triggerOnce>
              <h2 className="text-4xl md:h1-small font-bold font-montserrat text-primary">
                PROJECTS
              </h2>
            </Slide>
          </Fade>
          <Fade triggerOnce delay={200}>
            <Slide direction="up" triggerOnce>
              <h3 className="opacity-70 font-light max-w-[500px] md:max-w-[340px] text-sm">
                A selection of projects showcasing my experience,
                problem-solving approach, and ongoing work.
              </h3>
            </Slide>
          </Fade>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Fade key={project.title} delay={index * 300} triggerOnce>
              <Slide
                direction="up"
                delay={index * 300}
                triggerOnce
                className="h-full"
              >
                <ProjectCard {...project} />
              </Slide>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
