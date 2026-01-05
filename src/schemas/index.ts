import { z } from "zod";

export const createUserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),

  email: z.email({ message: "Invalid email address" }).optional(),

  password: z
    .string({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type createUserInput = z.infer<typeof createUserSchema>;

export const createResourceSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string(),
  type: z.string(),
});

export type createResourceInput = z.infer<typeof createResourceSchema>;

export const createTagSchema = z.object({
  name: z.string(),
});

export type createTagInput = z.infer<typeof createTagSchema>;
