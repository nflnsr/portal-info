import { z } from 'zod';
import { ArticleWhereUniqueInputObjectSchema } from './ArticleWhereUniqueInput.schema';
import { ArticleCreateWithoutLiked_byInputObjectSchema } from './ArticleCreateWithoutLiked_byInput.schema';
import { ArticleUncheckedCreateWithoutLiked_byInputObjectSchema } from './ArticleUncheckedCreateWithoutLiked_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleCreateOrConnectWithoutLiked_byInput> = z
  .object({
    where: z.lazy(() => ArticleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArticleCreateWithoutLiked_byInputObjectSchema),
      z.lazy(() => ArticleUncheckedCreateWithoutLiked_byInputObjectSchema),
    ]),
  })
  .strict();

export const ArticleCreateOrConnectWithoutLiked_byInputObjectSchema = Schema;
