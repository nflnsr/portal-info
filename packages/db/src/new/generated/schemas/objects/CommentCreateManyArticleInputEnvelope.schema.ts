import { z } from 'zod';
import { CommentCreateManyArticleInputObjectSchema } from './CommentCreateManyArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyArticleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CommentCreateManyArticleInputObjectSchema),
      z.lazy(() => CommentCreateManyArticleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const CommentCreateManyArticleInputEnvelopeObjectSchema = Schema;
