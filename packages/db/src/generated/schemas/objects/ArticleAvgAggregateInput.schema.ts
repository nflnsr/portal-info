import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    like: z.literal(true).optional(),
    comment_count: z.literal(true).optional(),
  })
  .strict();

export const ArticleAvgAggregateInputObjectSchema = Schema;
