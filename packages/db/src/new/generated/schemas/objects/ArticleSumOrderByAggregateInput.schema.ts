import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    like_count: z.lazy(() => SortOrderSchema).optional(),
    comment_count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ArticleSumOrderByAggregateInputObjectSchema = Schema;
