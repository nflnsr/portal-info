import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArticleOrderByRelationAggregateInputObjectSchema } from './ArticleOrderByRelationAggregateInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { LikeOrderByRelationAggregateInputObjectSchema } from './LikeOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    phone_number: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    article: z
      .lazy(() => ArticleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    comment: z
      .lazy(() => CommentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    like: z
      .lazy(() => LikeOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
