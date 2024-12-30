import { z } from 'zod';
import { NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.union([z.coerce.date().array(), z.string().array()]).optional(),
    notIn: z.union([z.coerce.date().array(), z.string().array()]).optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)])
      .optional(),
  })
  .strict();

export const DateTimeFilterObjectSchema = Schema;
