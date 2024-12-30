import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUncheckedCreateInput> = z
  .object({
    user_id: z.number(),
    article_id: z.number(),
    liked_at: z.coerce.date().optional(),
  })
  .strict();

export const LikeUncheckedCreateInputObjectSchema = Schema;
