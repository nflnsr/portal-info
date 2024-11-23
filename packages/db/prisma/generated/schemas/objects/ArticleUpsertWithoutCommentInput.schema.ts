import { z } from 'zod';
import { ArticleUpdateWithoutCommentInputObjectSchema } from './ArticleUpdateWithoutCommentInput.schema';
import { ArticleUncheckedUpdateWithoutCommentInputObjectSchema } from './ArticleUncheckedUpdateWithoutCommentInput.schema';
import { ArticleCreateWithoutCommentInputObjectSchema } from './ArticleCreateWithoutCommentInput.schema';
import { ArticleUncheckedCreateWithoutCommentInputObjectSchema } from './ArticleUncheckedCreateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleUpsertWithoutCommentInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArticleUpdateWithoutCommentInputObjectSchema),
      z.lazy(() => ArticleUncheckedUpdateWithoutCommentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArticleCreateWithoutCommentInputObjectSchema),
      z.lazy(() => ArticleUncheckedCreateWithoutCommentInputObjectSchema),
    ]),
  })
  .strict();

export const ArticleUpsertWithoutCommentInputObjectSchema = Schema;
