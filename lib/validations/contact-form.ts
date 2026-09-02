// lib/validations/contact-form.ts

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, apostrophes, and hyphens",
    ),

  location: z
    .string()
    .trim()
    .min(2, "Location is required")
    .max(100, "Location is too long"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),

  contact: z
    .string()
    .trim()
    .transform((value) => value.replace(/\s|-/g, ""))
    .refine(
      (value) => /^(\+27|0)[6-8][0-9]{8}$/.test(value),
      "Please enter a valid South African phone number",
    ),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
