import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateManyUserInput> = z
  .object({
    article_id: z.number(),
    liked_at: z.coerce.date().optional(),
  })
  .strict();

export const LikeCreateManyUserInputObjectSchema = Schema;
