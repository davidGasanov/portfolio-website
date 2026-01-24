import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),

  email: z
    .string()
    .min(1, "Email is required")
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Please enter a valid email",
    }),

  subject: z
    .string()
    .min(3, "Subject is required")
    .max(100, "Subject is too long"),

  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
