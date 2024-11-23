import { z } from 'zod';
import { roleSchema } from '../enums/role.schema';
import { NestedEnumroleWithAggregatesFilterObjectSchema } from './NestedEnumroleWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumroleFilterObjectSchema } from './NestedEnumroleFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumroleWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => roleSchema).optional(),
    in: z
      .union([z.lazy(() => roleSchema).array(), z.lazy(() => roleSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => roleSchema).array(), z.lazy(() => roleSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => roleSchema),
        z.lazy(() => NestedEnumroleWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumroleFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumroleFilterObjectSchema).optional(),
  })
  .strict();

export const EnumroleWithAggregatesFilterObjectSchema = Schema;
