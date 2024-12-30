import { z } from 'zod';
import { ArticleWhereUniqueInputObjectSchema } from './ArticleWhereUniqueInput.schema';
import { ArticleCreateWithoutCommentInputObjectSchema } from './ArticleCreateWithoutCommentInput.schema';
import { ArticleUncheckedCreateWithoutCommentInputObjectSchema } from './ArticleUncheckedCreateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleCreateOrConnectWithoutCommentInput> = z
  .object({
    where: z.lazy(() => ArticleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArticleCreateWithoutCommentInputObjectSchema),
      z.lazy(() => ArticleUncheckedCreateWithoutCommentInputObjectSchema),
    ]),
  })
  .strict();

export const ArticleCreateOrConnectWithoutCommentInputObjectSchema = Schema;
