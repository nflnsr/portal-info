import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCountAggregateInputType> = z
  .object({
    user_id: z.literal(true).optional(),
    article_id: z.literal(true).optional(),
    liked_at: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const LikeCountAggregateInputObjectSchema = Schema;
