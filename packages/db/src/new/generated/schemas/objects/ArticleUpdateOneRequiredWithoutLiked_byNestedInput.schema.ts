import { z } from 'zod';
import { ArticleCreateWithoutLiked_byInputObjectSchema } from './ArticleCreateWithoutLiked_byInput.schema';
import { ArticleUncheckedCreateWithoutLiked_byInputObjectSchema } from './ArticleUncheckedCreateWithoutLiked_byInput.schema';
import { ArticleCreateOrConnectWithoutLiked_byInputObjectSchema } from './ArticleCreateOrConnectWithoutLiked_byInput.schema';
import { ArticleUpsertWithoutLiked_byInputObjectSchema } from './ArticleUpsertWithoutLiked_byInput.schema';
import { ArticleWhereUniqueInputObjectSchema } from './ArticleWhereUniqueInput.schema';
import { ArticleUpdateWithoutLiked_byInputObjectSchema } from './ArticleUpdateWithoutLiked_byInput.schema';
import { ArticleUncheckedUpdateWithoutLiked_byInputObjectSchema } from './ArticleUncheckedUpdateWithoutLiked_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleUpdateOneRequiredWithoutLiked_byNestedInput> =
  z
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
      upsert: z
        .lazy(() => ArticleUpsertWithoutLiked_byInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArticleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ArticleUpdateWithoutLiked_byInputObjectSchema),
          z.lazy(() => ArticleUncheckedUpdateWithoutLiked_byInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ArticleUpdateOneRequiredWithoutLiked_byNestedInputObjectSchema =
  Schema;
