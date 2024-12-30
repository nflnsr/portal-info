import { z } from 'zod';
import { Article_CategorySchema } from '../enums/Article_Category.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumArticle_CategoryFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => Article_CategorySchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumArticle_CategoryFieldUpdateOperationsInputObjectSchema =
  Schema;
