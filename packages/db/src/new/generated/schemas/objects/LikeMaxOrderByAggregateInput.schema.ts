import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeMaxOrderByAggregateInput> = z
  .object({
    user_id: z.lazy(() => SortOrderSchema).optional(),
    article_id: z.lazy(() => SortOrderSchema).optional(),
    liked_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LikeMaxOrderByAggregateInputObjectSchema = Schema;
