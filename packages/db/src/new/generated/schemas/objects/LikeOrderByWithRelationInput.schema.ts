import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ArticleOrderByWithRelationInputObjectSchema } from './ArticleOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeOrderByWithRelationInput> = z
  .object({
    user_id: z.lazy(() => SortOrderSchema).optional(),
    article_id: z.lazy(() => SortOrderSchema).optional(),
    liked_at: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    article: z
      .lazy(() => ArticleOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LikeOrderByWithRelationInputObjectSchema = Schema;
