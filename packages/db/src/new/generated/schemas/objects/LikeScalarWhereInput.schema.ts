import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LikeScalarWhereInputObjectSchema),
        z.lazy(() => LikeScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LikeScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LikeScalarWhereInputObjectSchema),
        z.lazy(() => LikeScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    user_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    article_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    liked_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const LikeScalarWhereInputObjectSchema = Schema;
