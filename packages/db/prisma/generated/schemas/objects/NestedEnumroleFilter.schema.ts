import { z } from 'zod';
import { roleSchema } from '../enums/role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumroleFilter> = z
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
        z.lazy(() => NestedEnumroleFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumroleFilterObjectSchema = Schema;
