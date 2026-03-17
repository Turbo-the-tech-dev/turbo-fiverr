import { z } from 'zod';

export const statusSchema = z.object({
  status: z.enum(['ok', 'warn', 'down']),
  version: z.string().optional(),
  timestamp: z.string().datetime()
});

export type StatusResult = z.infer<typeof statusSchema>;

export function assertStatus(payload: unknown): StatusResult {
  return statusSchema.parse(payload);
}
