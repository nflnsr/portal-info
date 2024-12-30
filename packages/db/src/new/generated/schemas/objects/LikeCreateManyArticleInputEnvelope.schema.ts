import { z } from 'zod';
import { LikeCreateManyArticleInputObjectSchema } from './LikeCreateManyArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateManyArticleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => LikeCreateManyArticleInputObjectSchema),
      z.lazy(() => LikeCreateManyArticleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LikeCreateManyArticleInputEnvelopeObjectSchema = Schema;
