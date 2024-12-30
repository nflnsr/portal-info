import { z } from 'zod';
import { UserCreateNestedOneWithoutLikeInputObjectSchema } from './UserCreateNestedOneWithoutLikeInput.schema';
import { ArticleCreateNestedOneWithoutLiked_byInputObjectSchema } from './ArticleCreateNestedOneWithoutLiked_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateInput> = z
  .object({
    liked_at: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutLikeInputObjectSchema),
    article: z.lazy(
      () => ArticleCreateNestedOneWithoutLiked_byInputObjectSchema,
    ),
  })
  .strict();

export const LikeCreateInputObjectSchema = Schema;
