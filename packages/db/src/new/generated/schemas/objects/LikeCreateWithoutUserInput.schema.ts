import { z } from 'zod';
import { ArticleCreateNestedOneWithoutLiked_byInputObjectSchema } from './ArticleCreateNestedOneWithoutLiked_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateWithoutUserInput> = z
  .object({
    liked_at: z.coerce.date().optional(),
    article: z.lazy(
      () => ArticleCreateNestedOneWithoutLiked_byInputObjectSchema,
    ),
  })
  .strict();

export const LikeCreateWithoutUserInputObjectSchema = Schema;
