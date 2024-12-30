import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentSumAggregateInputType> = z
  .object({
    article_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
  })
  .strict();

export const CommentSumAggregateInputObjectSchema = Schema;
