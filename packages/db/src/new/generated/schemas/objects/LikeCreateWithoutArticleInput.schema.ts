import { z } from 'zod';
import { UserCreateNestedOneWithoutLikeInputObjectSchema } from './UserCreateNestedOneWithoutLikeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateWithoutArticleInput> = z
  .object({
    liked_at: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutLikeInputObjectSchema),
  })
  .strict();

export const LikeCreateWithoutArticleInputObjectSchema = Schema;
