import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeSumAggregateInputType> = z
  .object({
    user_id: z.literal(true).optional(),
    article_id: z.literal(true).optional(),
  })
  .strict();

export const LikeSumAggregateInputObjectSchema = Schema;
