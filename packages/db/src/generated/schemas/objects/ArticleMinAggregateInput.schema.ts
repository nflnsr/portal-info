import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    like: z.literal(true).optional(),
    comment_count: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    category: z.literal(true).optional(),
    topic: z.literal(true).optional(),
    writter: z.literal(true).optional(),
  })
  .strict();

export const ArticleMinAggregateInputObjectSchema = Schema;
