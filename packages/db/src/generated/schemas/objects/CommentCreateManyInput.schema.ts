import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyInput> = z
  .object({
    id: z.string().optional(),
    article_id: z.number(),
    user_id: z.number(),
    comment: z.string(),
    created_at: z.coerce.date().optional(),
  })
  .strict();

export const CommentCreateManyInputObjectSchema = Schema;