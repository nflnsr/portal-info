import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumArticle_CategoryNullableFilterObjectSchema } from './EnumArticle_CategoryNullableFilter.schema';
import { Article_CategorySchema } from '../enums/Article_Category.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArticleWhereInputObjectSchema),
        z.lazy(() => ArticleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArticleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArticleWhereInputObjectSchema),
        z.lazy(() => ArticleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]),
    user_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    like: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    comment_count: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    category: z
      .union([
        z.lazy(() => EnumArticle_CategoryNullableFilterObjectSchema),
        z.lazy(() => Article_CategorySchema),
      ])
      .optional()
      .nullable(),
    topic: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    writter: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    comment: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArticleWhereInputObjectSchema = Schema;
