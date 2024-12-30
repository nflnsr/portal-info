import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CommentCountOrderByAggregateInputObjectSchema } from './CommentCountOrderByAggregateInput.schema';
import { CommentAvgOrderByAggregateInputObjectSchema } from './CommentAvgOrderByAggregateInput.schema';
import { CommentMaxOrderByAggregateInputObjectSchema } from './CommentMaxOrderByAggregateInput.schema';
import { CommentMinOrderByAggregateInputObjectSchema } from './CommentMinOrderByAggregateInput.schema';
import { CommentSumOrderByAggregateInputObjectSchema } from './CommentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    article_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CommentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => CommentAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CommentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CommentMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CommentSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CommentOrderByWithAggregationInputObjectSchema = Schema;
