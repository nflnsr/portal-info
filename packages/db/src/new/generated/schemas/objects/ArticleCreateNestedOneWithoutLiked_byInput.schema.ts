import { z } from 'zod';
import { ArticleCreateWithoutLiked_byInputObjectSchema } from './ArticleCreateWithoutLiked_byInput.schema';
import { ArticleUncheckedCreateWithoutLiked_byInputObjectSchema } from './ArticleUncheckedCreateWithoutLiked_byInput.schema';
import { ArticleCreateOrConnectWithoutLiked_byInputObjectSchema } from './ArticleCreateOrConnectWithoutLiked_byInput.schema';
import { ArticleWhereUniqueInputObjectSchema } from './ArticleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleCreateNestedOneWithoutLiked_byInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArticleCreateWithoutLiked_byInputObjectSchema),
        z.lazy(() => ArticleUncheckedCreateWithoutLiked_byInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArticleCreateOrConnectWithoutLiked_byInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ArticleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArticleCreateNestedOneWithoutLiked_byInputObjectSchema = Schema;
