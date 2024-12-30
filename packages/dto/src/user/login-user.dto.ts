import { z } from 'zod';

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

export type LoginUserType = z.infer<typeof LoginUserSchema>;