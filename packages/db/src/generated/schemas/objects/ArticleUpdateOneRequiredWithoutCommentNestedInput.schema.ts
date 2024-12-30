import { z } from 'zod';
import { ArticleCreateWithoutCommentInputObjectSchema } from './ArticleCreateWithoutCommentInput.schema';
import { ArticleUncheckedCreateWithoutCommentInputObjectSchema } from './ArticleUncheckedCreateWithoutCommentInput.schema';
import { ArticleCreateOrConnectWithoutCommentInputObjectSchema } from './ArticleCreateOrConnectWithoutCommentInput.schema';
import { ArticleUpsertWithoutCommentInputObjectSchema } from './ArticleUpsertWithoutCommentInput.schema';
import { ArticleWhereUniqueInputObjectSchema } from './ArticleWhereUniqueInput.schema';
import { ArticleUpdateWithoutCommentInputObjectSchema } from './ArticleUpdateWithoutCommentInput.schema';
import { ArticleUncheckedUpdateWithoutCommentInputObjectSchema } from './ArticleUncheckedUpdateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleUpdateOneRequiredWithoutCommentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArticleCreateWithoutCommentInputObjectSchema),
          z.lazy(() => ArticleUncheckedCreateWithoutCommentInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ArticleCreateOrConnectWithoutCommentInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ArticleUpsertWithoutCommentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArticleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ArticleUpdateWithoutCommentInputObjectSchema),
          z.lazy(() => ArticleUncheckedUpdateWithoutCommentInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ArticleUpdateOneRequiredWithoutCommentNestedInputObjectSchema =
  Schema;
