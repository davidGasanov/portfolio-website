import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary-light" | "secondary-dark";
};

const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  const button = tv({
    base: "pt-4 pr-[24px] pb-[14px] pl-[27px] transition-all duration-200 ease-in-out rounded-[14px] font-bold cursor-pointer text-[15px] font-roboto leading-snug",
    variants: {
      variant: {
        // Primary
        primary:
          "bg-dark-secondary text-light-secondary hover:bg-primary hover:text-dark-primary disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:hover:text-gray-600",
        // Secondary (Light)
        "secondary-light":
          "bg-mirage-blue text-water-white border border-water-white hover:bg-water-white hover:text-mirage-blue disabled:bg-gray-400 disabled:text-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:hover:text-gray-600",
        // Secondary (Dark)
        "secondary-dark":
          "bg-none text-san-juan-blue border border-san-juan-blue hover:bg-san-juan-blue hover:text-water-white disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-400",
      },
    },
  });

  return (
    <button className={twMerge(button({ variant }), className)} {...props} />
  );
};

export default Button;