import { z } from 'zod';
import { ArticleUpdateWithoutLiked_byInputObjectSchema } from './ArticleUpdateWithoutLiked_byInput.schema';
import { ArticleUncheckedUpdateWithoutLiked_byInputObjectSchema } from './ArticleUncheckedUpdateWithoutLiked_byInput.schema';
import { ArticleCreateWithoutLiked_byInputObjectSchema } from './ArticleCreateWithoutLiked_byInput.schema';
import { ArticleUncheckedCreateWithoutLiked_byInputObjectSchema } from './ArticleUncheckedCreateWithoutLiked_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleUpsertWithoutLiked_byInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArticleUpdateWithoutLiked_byInputObjectSchema),
      z.lazy(() => ArticleUncheckedUpdateWithoutLiked_byInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArticleCreateWithoutLiked_byInputObjectSchema),
      z.lazy(() => ArticleUncheckedCreateWithoutLiked_byInputObjectSchema),
    ]),
  })
  .strict();

export const ArticleUpsertWithoutLiked_byInputObjectSchema = Schema;
