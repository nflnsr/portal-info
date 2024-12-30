import { z } from 'zod';
import { LikeWhereInputObjectSchema } from './LikeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeListRelationFilter> = z
  .object({
    every: z.lazy(() => LikeWhereInputObjectSchema).optional(),
    some: z.lazy(() => LikeWhereInputObjectSchema).optional(),
    none: z.lazy(() => LikeWhereInputObjectSchema).optional(),
  })
  .strict();

export const LikeListRelationFilterObjectSchema = Schema;
