import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArticleCountOrderByAggregateInputObjectSchema } from './ArticleCountOrderByAggregateInput.schema';
import { ArticleAvgOrderByAggregateInputObjectSchema } from './ArticleAvgOrderByAggregateInput.schema';
import { ArticleMaxOrderByAggregateInputObjectSchema } from './ArticleMaxOrderByAggregateInput.schema';
import { ArticleMinOrderByAggregateInputObjectSchema } from './ArticleMinOrderByAggregateInput.schema';
import { ArticleSumOrderByAggregateInputObjectSchema } from './ArticleSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    like: z.lazy(() => SortOrderSchema).optional(),
    comment_count: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    category: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    topic: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    writter: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArticleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ArticleAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ArticleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArticleMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ArticleSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArticleOrderByWithAggregationInputObjectSchema = Schema;
