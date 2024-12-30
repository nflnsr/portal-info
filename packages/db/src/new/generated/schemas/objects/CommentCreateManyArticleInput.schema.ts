import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyArticleInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.number(),
    comment: z.string(),
    created_at: z.coerce.date().optional(),
  })
  .strict();

export const CommentCreateManyArticleInputObjectSchema = Schema;
