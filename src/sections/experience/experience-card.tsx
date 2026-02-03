import type { ReactNode } from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface ExperienceItem {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
  icon?: ReactNode;
}

interface Props {
  item: ExperienceItem;
}

export const ExperienceCard = ({ item }: Props) => {
  const [open, setOpen] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-linear-to-br from-dark-secondary/55 to-transparent
        p-6 backdrop-blur transition-all duration-200 ease-in-out"
    >
      {/* Cursor spotlight */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            400px circle at ${pos.x}px ${pos.y}px,
            rgba(51, 78, 138, 0.1),
            transparent 60%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            {item.icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-lg text-white">
                {item.icon}
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-white">{item.role}</h3>

              <p className="text-sm text-primary">
                {item.company}
                {item.location && (
                  <span className="text-white/60"> · {item.location}</span>
                )}
              </p>

              <p className="mt-1 text-xs text-white/50">
                {item.startDate} – {item.endDate}
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-white/60 transition hover:bg-white/10"
          >
            <FiChevronDown
              className={`transition-transform ${open ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
        </div>

        {/* Content */}
        <div
          className={`
    grid transition-all duration-300 ease-in-out
    ${open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden space-y-4">
            <p className="text-sm leading-relaxed text-white/70">
              {item.description}
            </p>

            {item.technologies && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
