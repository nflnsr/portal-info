import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentWhereUniqueInput> = z
  .object({
    id: z.string(),
  })
  .strict();

export const CommentWhereUniqueInputObjectSchema = Schema;
