import { z } from 'zod';
import { article_categorySchema } from '../enums/article_category.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumarticle_categoryNullableFilter> = z
  .object({
    equals: z
      .lazy(() => article_categorySchema)
      .optional()
      .nullable(),
    in: z
      .union([
        z.lazy(() => article_categorySchema).array(),
        z.lazy(() => article_categorySchema),
      ])
      .optional()
      .nullable(),
    notIn: z
      .union([
        z.lazy(() => article_categorySchema).array(),
        z.lazy(() => article_categorySchema),
      ])
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => article_categorySchema),
        z.lazy(() => NestedEnumarticle_categoryNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumarticle_categoryNullableFilterObjectSchema = Schema;
