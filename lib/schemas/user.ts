import { z } from 'zod';

export const userLoginSchema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email(),
  password: z.string().min(4).max(32),
});
export const userRegisterSchema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email(),
  password: z.string().min(4).max(32),
  confirmPassword: z.string().min(4).max(32),
});
