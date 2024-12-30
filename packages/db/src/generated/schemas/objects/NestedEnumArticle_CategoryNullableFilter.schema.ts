import { z } from 'zod';
import { Article_CategorySchema } from '../enums/Article_Category.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumArticle_CategoryNullableFilter> = z
  .object({
    equals: z
      .lazy(() => Article_CategorySchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => Article_CategorySchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => Article_CategorySchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => Article_CategorySchema),
        z.lazy(() => NestedEnumArticle_CategoryNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumArticle_CategoryNullableFilterObjectSchema = Schema;
