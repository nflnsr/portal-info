import { z } from 'zod';
import { article_categorySchema } from '../enums/article_category.schema';
import { ArticleCreatetagsInputObjectSchema } from './ArticleCreatetagsInput.schema';
import { UserCreateNestedOneWithoutArticleInputObjectSchema } from './UserCreateNestedOneWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleCreateWithoutCommentInput> = z
  .object({
    title: z.string(),
    description: z.string(),
    like: z.number().optional(),
    comment_count: z.number().optional(),
    created_at: z.coerce.date().optional(),
    category: z
      .lazy(() => article_categorySchema)
      .optional()
      .nullable(),
    topic: z.string().optional().nullable(),
    writter: z.string().optional().nullable(),
    tags: z
      .union([
        z.lazy(() => ArticleCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutArticleInputObjectSchema),
  })
  .strict();

export const ArticleCreateWithoutCommentInputObjectSchema = Schema;
