import { z } from 'zod';
import { ArticleCreateWithoutCommentInputObjectSchema } from './ArticleCreateWithoutCommentInput.schema';
import { ArticleUncheckedCreateWithoutCommentInputObjectSchema } from './ArticleUncheckedCreateWithoutCommentInput.schema';
import { ArticleCreateOrConnectWithoutCommentInputObjectSchema } from './ArticleCreateOrConnectWithoutCommentInput.schema';
import { ArticleWhereUniqueInputObjectSchema } from './ArticleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleCreateNestedOneWithoutCommentInput> = z
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
    connect: z.lazy(() => ArticleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArticleCreateNestedOneWithoutCommentInputObjectSchema = Schema;
