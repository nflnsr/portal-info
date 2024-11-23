import { z } from 'zod';
import { ArticleWhereInputObjectSchema } from './ArticleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArticleWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ArticleWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ArticleRelationFilterObjectSchema = Schema;
