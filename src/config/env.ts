import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url().default('http://localhost:3001'),
  VITE_APP_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

export const env = envSchema.parse(import.meta.env);
