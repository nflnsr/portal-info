import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LikeCountOrderByAggregateInputObjectSchema } from './LikeCountOrderByAggregateInput.schema';
import { LikeAvgOrderByAggregateInputObjectSchema } from './LikeAvgOrderByAggregateInput.schema';
import { LikeMaxOrderByAggregateInputObjectSchema } from './LikeMaxOrderByAggregateInput.schema';
import { LikeMinOrderByAggregateInputObjectSchema } from './LikeMinOrderByAggregateInput.schema';
import { LikeSumOrderByAggregateInputObjectSchema } from './LikeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeOrderByWithAggregationInput> = z
  .object({
    user_id: z.lazy(() => SortOrderSchema).optional(),
    article_id: z.lazy(() => SortOrderSchema).optional(),
    liked_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => LikeCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => LikeAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => LikeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LikeMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => LikeSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LikeOrderByWithAggregationInputObjectSchema = Schema;
