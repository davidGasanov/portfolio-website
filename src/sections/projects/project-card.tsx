import { useRef } from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  className?: string;
};

const card = tv({
  slots: {
    root: [
      "relative group overflow-hidden rounded-2xl",
      "border border-white/10 bg-dark-secondary/40",
      "transition-transform duration-300 flex flex-col",
    ],
    spotlight: [
      "pointer-events-none absolute inset-0",
      "opacity-0 group-hover:opacity-100",
      "transition-opacity duration-300",
    ],
    imageWrapper: "relative h-56 overflow-hidden",
    image: [
      "h-full w-full object-cover",
      "transition-transform duration-500 group-hover:scale-105",
    ],
    overlay: [
      "absolute inset-0",
      "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
    ],
    content: "relative p-5 space-y-3 flex-1 flex flex-col",
    title: "font-montserrat text-xl font-semibold",
    description: "text-sm text-light-primary/80",
    techList: "flex flex-wrap gap-2 pt-2",
    badge: [
      "text-xs px-2.5 py-1 rounded-full",
      "bg-white/10 text-light-secondary",
      "border border-white/10",
    ],
    actions: ["mt-4 flex flex-wrap gap-3"],
    actionBtn: [
      "inline-flex items-center gap-2",
      "rounded-lg px-3 py-2 text-sm",
      "bg-primary text-dark-primary",
      "hover:bg-primary/90",
      "transition-colors",
    ],
  },
});

export function ProjectCard({
  title,
  description,
  image,
  tech,
  repoUrl,
  liveUrl,
  className,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const styles = card();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      className={twMerge(styles.root(), className)}
    >
      {/* Spotlight */}
      <div
        className={styles.spotlight()}
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(51, 78, 138, 0.2), transparent 40%)",
        }}
      />

      {/* Image */}
      <div className={styles.imageWrapper()}>
        <img src={image} alt={title} className={styles.image()} />
        <div className={styles.overlay()} />
      </div>

      {/* Content */}
      <div className={styles.content()}>
        <h3 className={styles.title()}>{title}</h3>
        <p className={styles.description()}>{description}</p>

        <div className="flex flex-col flex-1 justify-end">
          {/* Tech stack */}
          <div className={styles.techList()}>
            {tech.map((item) => (
              <span key={item} className={styles.badge()}>
                {item}
              </span>
            ))}
          </div>

          {/* Actions (always visible) */}
          <div className={styles.actions()}>
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn()}
              >
                <FaGithub /> Repo
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn()}
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
