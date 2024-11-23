import { z } from 'zod';
import { article_categorySchema } from '../enums/article_category.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumarticle_categoryFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => article_categorySchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumarticle_categoryFieldUpdateOperationsInputObjectSchema =
  Schema;
