import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface BaseProps {
  label?: string;
  error?: string;
  className?: string;
}

type InputProps =
  | (BaseProps &
      React.InputHTMLAttributes<HTMLInputElement> & {
        as?: "input";
      })
  | (BaseProps &
      React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
        as: "textarea";
      });

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>((props, ref) => {
  const { label, error, className, as = "input", ...rest } = props;

  const Component = as === "textarea" ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-white/70">{label}</label>}

      <Component
        ref={ref as any}
        rows={4}
        className={twMerge(
          `
          w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-white
          outline-none transition-all duration-200
          
          placeholder:text-white/40

          border-white/15
          hover:border-white/30
          focus:border-primary
          focus:ring-1 focus:ring-primary/50

          ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/40" : ""}
          `,
          className,
        )}
        {...(rest as any)}
      />

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
});

Input.displayName = "Input";
