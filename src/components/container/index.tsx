// Primary container for page section widths

import type React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "max-w-[1100px] px-[24px] md:px-[40px] lg:mx-auto xl:px-0 ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
