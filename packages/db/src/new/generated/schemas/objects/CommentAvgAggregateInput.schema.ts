import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentAvgAggregateInputType> = z
  .object({
    article_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
  })
  .strict();

export const CommentAvgAggregateInputObjectSchema = Schema;
