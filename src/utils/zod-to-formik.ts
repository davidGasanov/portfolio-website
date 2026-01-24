import { z, ZodError } from "zod";

export const zodToFormik =
  (schema: z.ZodSchema) =>
  (values: unknown): Record<string, string> => {
    try {
      schema.parse(values);
      return {};
    } catch (err) {
      const errors: Record<string, string> = {};

      if (err instanceof ZodError) {
        err.issues.forEach((issue) => {
          const field = issue.path[0];

          if (typeof field === "string") {
            errors[field] = issue.message;
          }
        });
      }

      return errors;
    }
  };
