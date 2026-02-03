import {
  FaBookOpen,
  FaBootstrap,
  FaBrain,
  FaBug,
  FaChartLine,
  FaCode,
  FaCss3,
  FaHtml5,
  FaPuzzlePiece,
  FaSass,
  FaUniversalAccess,
  FaUsers,
  FaUserTie,
} from "react-icons/fa6";
import Container from "../../components/container";
import {
  FaCogs,
  FaDev,
  FaProjectDiagram,
  FaReact,
  FaTools,
} from "react-icons/fa";
import {
  SiFormik,
  SiGit,
  SiMui,
  SiReacthookform,
  SiReactrouter,
  SiRedux,
  SiSanity,
  SiShadcnui,
  SiStrapi,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { MdStyle } from "react-icons/md";
import type { IconType } from "react-icons";
import SkillCard from "./skill-card";
import { twMerge } from "tailwind-merge";
import { DiVisualstudio } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { Fade, Slide } from "react-awesome-reveal";

export interface SkillType {
  title: string;
  description?: string;
  type: "container" | "child";
  Icon: IconType;
  children?: SkillType[];
  className?: string;
}

const skills: SkillType[] = [
  {
    title: "Frontend Technology",
    type: "container",
    className: "lg:col-span-12",
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
            description:
              "Structure content semantically to build accessible and well-organized web pages.",
            Icon: FaHtml5,
          },
          {
            title: "CSS",
            type: "child",
            description:
              "Style interfaces efficiently, creating responsive and visually appealing layouts.",
            Icon: FaCss3,
          },
          {
            title: "TypeScript",
            type: "child",
            description:
              "Enhance code reliability and maintainability with static typing and strong developer tooling.",
            Icon: SiTypescript,
          },
          {
            title: "React",
            type: "child",
            description:
              "Build dynamic, component-based UIs with a focus on reusability and state management.",
            Icon: FaReact,
          },
          {
            title: "Vite",
            type: "child",
            description:
              "Optimize development speed and build processes with fast, modern tooling.",
            Icon: SiVite,
          },
          {
            title: "NextJS",
            type: "child",
            description:
              "Create performant, server-rendered applications with routing, API integration, and SEO optimization.",
            Icon: RiNextjsFill,
          },
        ],
      },
      {
        title: "Styling",
        Icon: MdStyle,
        type: "container",
        children: [
          {
            title: "MUI",
            type: "child",
            description:
              "Design intuitive, accessible interfaces using a component-driven approach with a strong design system foundation.",
            Icon: SiMui,
          },
          {
            title: "Shadcn",
            type: "child",
            description:
              "Build elegant, consistent UIs with reusable components and a clean, utility-first architecture.",
            Icon: SiShadcnui,
          },
          {
            title: "Tailwind",
            type: "child",
            description:
              "Develop responsive, maintainable layouts rapidly through a utility-first CSS workflow.",
            Icon: RiTailwindCssFill,
          },
          {
            title: "Bootstrap",
            type: "child",
            description:
              "Implement reliable and responsive layouts with a grid-based system and prebuilt components.",
            Icon: FaBootstrap,
          },
          {
            title: "Sass",
            type: "child",
            description:
              "Enhance CSS with nesting, variables, and mixins for cleaner and more modular styling.",
            Icon: FaSass,
          },
        ],
      },
      {
        title: "Other utilities",
        Icon: FaTools,
        type: "container",
        children: [
          {
            title: "Strapi",
            type: "child",
            description:
              "Develop and maintain structured content through a headless CMS with a clean API design.",
            Icon: SiStrapi,
          },
          {
            title: "Sanity.io",
            type: "child",
            description:
              "Build flexible, real-time content management systems that support seamless collaboration.",
            Icon: SiSanity,
          },
          {
            title: "Formik",
            type: "child",
            description:
              "Simplify complex form state management and validation workflows in React projects.",
            Icon: SiFormik,
          },
          {
            title: "React Hook Form",
            type: "child",
            description:
              "Implement performant, hook-based form handling with minimal re-renders and clean validation logic.",
            Icon: SiReacthookform,
          },
          {
            title: "Yup",
            type: "child",
            description:
              "Create robust and reusable schema-based validation for predictable form behavior.",
            Icon: FaCode,
          },
          {
            title: "Zod",
            type: "child",
            description:
              "Guarantee type safety and runtime validation for data structures in TypeScript applications.",
            Icon: SiZod,
          },
          {
            title: "Redux",
            type: "child",
            description:
              "Maintain predictable and centralized state management across complex interfaces.",
            Icon: SiRedux,
          },
          {
            title: "React Router",
            type: "child",
            description:
              "Handle navigation and dynamic routing to create intuitive single-page user experiences.",
            Icon: SiReactrouter,
          },
        ],
      },
    ],
  },
  {
    title: "Soft Skills & Work Ethic",
    Icon: FaBrain,
    className: "lg:col-span-4",
    type: "container",
    children: [
      {
        title: "Teamwork",
        type: "child",
        description: "Effective collaboration within cross-functional teams.",
        Icon: FaUsers,
      },
      {
        title: "Critical thinking",
        type: "child",
        description: "Problem-solving, creating efficient solutions.",
        Icon: FaBrain,
      },
      {
        title: "Professional attitude",
        type: "child",
        description:
          "Maintaining reliability, communication, and accountability.",
        Icon: FaUserTie,
      },
      {
        title: "Growth-oriented",
        type: "child",
        description:
          "Constantly learning and improving technical and soft skills.",
        Icon: FaChartLine,
      },
    ],
  },

  {
    title: "Development Practices & Methodologies",
    Icon: FaProjectDiagram,
    className: "lg:col-span-4",
    type: "container",
    children: [
      {
        title: "AGILE",
        type: "child",
        description:
          "Following Agile methodologies, working in sprints and adapting quickly to changes in project requirements.",
        Icon: FaCogs,
      },
      {
        title: "SOLID principles",
        type: "child",
        description:
          "SOLID principles help me to write clean, scalable, and maintainable code.",
        Icon: FaProjectDiagram,
      },
      {
        title: "Clean code",
        type: "child",
        description:
          "Prioritizing readability and simplicity, ensuring my code is easy to understand and extend.",
        Icon: FaBookOpen,
      },
      {
        title: "Type safety (TypeScript)",
        type: "child",
        description:
          "I rely on TypeScript to improve reliability, making sure that my code is maintainable and less prone to bugs.",
        Icon: SiTypescript,
      },
      {
        title: "Accessibility (a11y)",
        type: "child",
        description:
          "The web should be accessible to everyone, so I make sure that my websites have good accessibility.",
        Icon: FaUniversalAccess,
      },
    ],
  },
  {
    title: "Tools and Platforms",
    type: "container",
    className: "lg:col-span-4",
    Icon: FaPuzzlePiece,
    children: [
      {
        title: "VS Code",
        type: "child",
        description:
          "Main development environment with custom extensions setup.",
        Icon: BiLogoVisualStudio,
      },
      {
        title: "Git",
        type: "child",
        description: "Version control for collaboration and code management.",
        Icon: SiGit,
      },
      {
        title: "Azure",
        type: "child",
        description: "Used for CI/CD, cloud hosting, and resource management.",
        Icon: VscAzureDevops,
      },
      {
        title: "Vercel",
        type: "child",
        description:
          "Deployment platform optimized for Next.js and static sites.",
        Icon: IoLogoVercel,
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-dark-secondary/25 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(252, 163, 17, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(252, 163, 17, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating gradient blob - top right */}
        <div
          className="absolute -top-[340px] -right-[340px] w-[840px] h-[840px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float-slow 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -top-[140px] right-[240px] w-[340px] h-[340px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float-slow 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[240px] -right-[200px] w-[540px] h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float-slow 30s ease-in-out infinite",
          }}
        />

        {/* Floating gradient blob - bottom left */}
        <div
          className="absolute -bottom-[220px] -left-[220px] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252, 163, 17, 0.12) 0%, transparent 70%)",
            filter: "blur(90px)",
            animation: "float-slow 35s ease-in-out infinite 5s",
          }}
        />

        {/* Floating gradient blob - center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "float-slow 40s ease-in-out infinite 10s",
          }}
        />
      </div>

      <Container className="pt-20 md:pt-24 pb-20 mt:pb-24 relative z-10">
        <div
          className={twMerge("flex flex-col gap-3 items-center text-center")}
        >
          <Fade triggerOnce>
            <Slide direction="up" triggerOnce>
              <h2 className="text-4xl md:h1-small font-bold font-montserrat text-primary">
                SKILLS
              </h2>
            </Slide>
          </Fade>
          <Fade triggerOnce delay={200}>
            <Slide direction="up" triggerOnce>
              {" "}
              <h3 className="opacity-70 font-light max-w-[500px] xl:max-w-[640px] text-sm">
                The technology I use to create performant and accessible
                websites
              </h3>
            </Slide>
          </Fade>
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
