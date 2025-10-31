import type React from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import type { SkillType } from ".";
import { useEffect, useRef, useState } from "react";

const SkillCard: React.FC<SkillType & { index?: number }> = ({
  title,
  Icon,
  children,
  type,
  index,
  description,
  className,
}) => {
  const isFirst = index === 0;
  const childrenHaveChildren = !!children?.find((child) =>
    child.hasOwnProperty("children")
  );

  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const [descriptionHeight, setDescriptionHeight] = useState(0);

  useEffect(() => {
    if (descriptionRef?.current?.offsetHeight) {
      setDescriptionHeight(descriptionRef?.current?.offsetHeight);
    }
  }, [descriptionRef?.current?.offsetHeight]);

  const card = tv({
    base: "flex flex-col relative z-10 w-full h-full",
    variants: {
      type: {
        container:
          "rounded-2xl bg-dark-secondary/40 border border-light-primary/10 p-4 hover:border-light-primary/15 transition-all duration-200 ease-in-out shadow-md shadow-dark-secondary/50",
        child: "",
      },
      isFirst: {
        true: "p-4",
        false: "",
      },
    },
  });

  const titleStyle = tv({
    variants: {
      type: {
        container: "text-lg font-semibold font-montserrat",
        child: "text-md font-roboto font-regular",
      },
    },
  });

  return (
    <div
      className={twMerge(
        "relative w-full col-span-12 lg:col-span-6",
        className
      )}
    >
      {type === "container" && (
        <div className="absolute w-full h-full bg-dark-primary rounded-2xl" />
      )}

      <div className={card({ type, isFirst })}>
        <div
          style={
            description
              ? {
                  height: 32,
                  transition: "all 0.3s ease-in-out",
                }
              : { height: "auto" }
          }
          onMouseEnter={(e) => {
            if (description && descriptionHeight)
              e.currentTarget.style.height = `${descriptionHeight + 32}px`;
          }}
          onMouseLeave={(e) => {
            if (description) e.currentTarget.style.height = "32px";
          }}
          className={twMerge(
            type === "child" &&
              "p-1 px-2 rounded-2xl cursor-pointer hover:bg-dark-secondary/50 transition-all duration-300 ease-in-out overflow-hidden"
            // description && `hover:h-[${descriptionHeight + 24}px]`
          )}
        >
          <div
            className={twMerge("flex items-center gap-2 text-light-secondary")}
          >
            <Icon className="text-primary" size={18} />
            <h3 className={titleStyle({ type })}>{title}</h3>
          </div>
          {type === "child" && description && (
            <p ref={descriptionRef} className="ml-[26px] opacity-65">
              {description}
            </p>
          )}
        </div>
        {children && (
          <div
            className={twMerge(
              "rounded-2xl flex gap-4 p-2 pl-4",
              !childrenHaveChildren && "mt-2 flex-col gap-2"
            )}
          >
            {children?.map((child) => (
              <SkillCard {...child} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
