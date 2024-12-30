import { z } from 'zod';
import { ArticleScalarWhereInputObjectSchema } from './ArticleScalarWhereInput.schema';
import { ArticleUpdateManyMutationInputObjectSchema } from './ArticleUpdateManyMutationInput.schema';
import { ArticleUncheckedUpdateManyWithoutArticleInputObjectSchema } from './ArticleUncheckedUpdateManyWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => ArticleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ArticleUpdateManyMutationInputObjectSchema),
      z.lazy(() => ArticleUncheckedUpdateManyWithoutArticleInputObjectSchema),
    ]),
  })
  .strict() as z.ZodType<Prisma.ArticleUpdateManyWithWhereWithoutUserInput>;

export const ArticleUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
