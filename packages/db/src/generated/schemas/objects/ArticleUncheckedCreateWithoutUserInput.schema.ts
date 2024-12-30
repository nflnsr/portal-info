import { z } from 'zod';
import { Article_CategorySchema } from '../enums/Article_Category.schema';
import { ArticleCreatetagsInputObjectSchema } from './ArticleCreatetagsInput.schema';
import { CommentUncheckedCreateNestedManyWithoutArticleInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string(),
    like: z.number().optional(),
    comment_count: z.number().optional(),
    created_at: z.coerce.date().optional(),
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
    comment: z
      .lazy(
        () => CommentUncheckedCreateNestedManyWithoutArticleInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArticleUncheckedCreateWithoutUserInputObjectSchema = Schema;
