import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    article_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    comment: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
  })
  .strict();

export const CommentMinAggregateInputObjectSchema = Schema;
