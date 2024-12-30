import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumArticle_CategoryNullableFilterObjectSchema } from './EnumArticle_CategoryNullableFilter.schema';
import { Article_CategorySchema } from '../enums/Article_Category.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArticleScalarWhereInputObjectSchema),
        z.lazy(() => ArticleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArticleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArticleScalarWhereInputObjectSchema),
        z.lazy(() => ArticleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
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
  })
  .strict();

export const ArticleScalarWhereInputObjectSchema = Schema;
