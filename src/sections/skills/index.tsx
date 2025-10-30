import { FaBootstrap, FaCode, FaCss3, FaHtml5, FaSass } from "react-icons/fa6";
import Container from "../../components/container";
import { FaDev, FaReact } from "react-icons/fa";
import { SiMui, SiShadcnui, SiTypescript, SiVite } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { MdStyle } from "react-icons/md";
import type { IconType } from "react-icons";
import SkillCard from "./skill-card";
import { twMerge } from "tailwind-merge";

export interface SkillType {
  title: string;
  description?: string;
  type: "container" | "child";
  Icon: IconType;
  children?: SkillType[];
  className?: string; // for stylingw
}

const skills: SkillType[] = [
  {
    title: "Frontend Technology",
    type: "container",
    className: 'lg:col-span-8',
    Icon: FaCode,
    children: [
      {
        title: "Languages, Frameworks/Libraries",
        Icon: FaDev,
        type: "container",
        children: [
          {
            title: "HTML",
            type: "child",
            Icon: FaHtml5,
          },
          {
            title: "CSS",
            type: "child",
            Icon: FaCss3,
          },
          {
            title: "Typescript",
            type: "child",
            Icon: SiTypescript,
          },
          {
            title: "React",
            type: "child",
            Icon: FaReact,
          },
          {
            type: "child",
            title: "Vite",
            Icon: SiVite,
          },
          {
            title: "NextJS",
            type: "child",
            Icon: RiNextjsFill,
          },
        ],
      },
      {
        title: "Styling tools",
        Icon: MdStyle,
        type: "container",
        children: [
          {
            title: "MUI",
            type: "child",
            Icon: SiMui,
          },
          {
            title: "Shadcn",
            Icon: SiShadcnui,
            type: "child",
          },
          {
            title: "Tailwind",
            Icon: RiTailwindCssFill,
            type: "child",
          },
          {
            title: "Bootstrap",
            Icon: FaBootstrap,
            type: "child",
          },
          {
            title: "Sass",
            Icon: FaSass,
            type: "child",
          },
        ],
      },
    ],
  },
  {
    title: "Styling tools",
    className: 'lg:col-span-4',
    Icon: MdStyle,
    type: "container",
    children: [
      {
        title: "MUI",
        type: "child",
        Icon: SiMui,
      },
      {
        title: "Shadcn",
        Icon: SiShadcnui,
        type: "child",
      },
      {
        title: "Tailwind",
        Icon: RiTailwindCssFill,
        type: "child",
      },
      {
        title: "Bootstrap",
        Icon: FaBootstrap,
        type: "child",
      },
      {
        title: "Sass",
        Icon: FaSass,
        type: "child",
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="w-full min-h-screen bg-dark-secondary/25">
      <Container className="pt-20 md:pt-24">
        <div
          className={twMerge("flex flex-col gap-3 items-center text-center")}
        >
          <h1 className="text-4xl md:h1-large font-bold font-montserrat text-primary">
            Skills
          </h1>
          <h2 className="opacity-70 font-light max-w-[500px] xl:max-w-[640px] ">
            Skills section description here
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} index={index} {...skill} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
