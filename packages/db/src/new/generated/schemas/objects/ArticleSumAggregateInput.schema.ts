import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    like_count: z.literal(true).optional(),
    comment_count: z.literal(true).optional(),
  })
  .strict();

export const ArticleSumAggregateInputObjectSchema = Schema;