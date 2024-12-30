import { z } from 'zod';
import { Article_CategorySchema } from '../enums/Article_Category.schema';
import { ArticleCreatetagsInputObjectSchema } from './ArticleCreatetagsInput.schema';
import { LikeCreateNestedManyWithoutArticleInputObjectSchema } from './LikeCreateNestedManyWithoutArticleInput.schema';
import { CommentCreateNestedManyWithoutArticleInputObjectSchema } from './CommentCreateNestedManyWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleCreateWithoutUserInput> = z
  .object({
    title: z.string(),
    description: z.string(),
    category: z
      .lazy(() => Article_CategorySchema)
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
    like_count: z.number().optional(),
    comment_count: z.number().optional(),
    created_at: z.coerce.date().optional(),
    liked_by: z
      .lazy(() => LikeCreateNestedManyWithoutArticleInputObjectSchema)
      .optional(),
    comment: z
      .lazy(() => CommentCreateNestedManyWithoutArticleInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArticleCreateWithoutUserInputObjectSchema = Schema;
