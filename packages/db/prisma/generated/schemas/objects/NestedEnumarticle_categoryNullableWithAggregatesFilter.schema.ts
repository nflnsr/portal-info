import { z } from 'zod';
import { article_categorySchema } from '../enums/article_category.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumarticle_categoryNullableFilterObjectSchema } from './NestedEnumarticle_categoryNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumarticle_categoryNullableWithAggregatesFilter> =
  z
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
          z.lazy(
            () =>
              NestedEnumarticle_categoryNullableWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumarticle_categoryNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumarticle_categoryNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumarticle_categoryNullableWithAggregatesFilterObjectSchema =
  Schema;
