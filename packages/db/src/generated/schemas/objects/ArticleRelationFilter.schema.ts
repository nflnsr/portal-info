import { z } from 'zod';
import { ArticleWhereInputObjectSchema } from './ArticleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleScalarRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArticleWhereInputObjectSchema)
      .optional(),
    isNot: z
      .lazy(() => ArticleWhereInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArticleRelationFilterObjectSchema = Schema;
