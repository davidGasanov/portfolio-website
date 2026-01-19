import { ExperienceCard, type ExperienceItem } from "./experience-card";

export const ExperienceTimeline = ({ items }: { items: ExperienceItem[] }) => {
  return (
    <div className="relative space-y-10 my-20">
      {/* Vertical line */}
      <div
        className="absolute left-[7px] top-0 h-full w-px bg-linear-to-b
    from-transparent
     from-[-20%] via-50% to-120%
    via-light-primary/30
    to-transparent"
      />

      {items.map((item, index) => (
        <div key={index} className="relative flex gap-6">
          {/* Timeline dot */}
          <div className="relative z-10 mt-7 h-4 w-4 rounded-full bg-primary/90 border-[3px] border-dark-primary" />

          <div className="flex-1">
            <ExperienceCard item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};
