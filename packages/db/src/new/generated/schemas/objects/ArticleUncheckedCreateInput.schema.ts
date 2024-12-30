import { z } from 'zod';
import { Article_CategorySchema } from '../enums/Article_Category.schema';
import { ArticleCreatetagsInputObjectSchema } from './ArticleCreatetagsInput.schema';
import { LikeUncheckedCreateNestedManyWithoutArticleInputObjectSchema } from './LikeUncheckedCreateNestedManyWithoutArticleInput.schema';
import { CommentUncheckedCreateNestedManyWithoutArticleInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    user_id: z.number(),
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
      .lazy(() => LikeUncheckedCreateNestedManyWithoutArticleInputObjectSchema)
      .optional(),
    comment: z
      .lazy(
        () => CommentUncheckedCreateNestedManyWithoutArticleInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArticleUncheckedCreateInputObjectSchema = Schema;
