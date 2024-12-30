import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithoutArticleInputObjectSchema } from './LikeUpdateWithoutArticleInput.schema';
import { LikeUncheckedUpdateWithoutArticleInputObjectSchema } from './LikeUncheckedUpdateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutArticleInput> = z
  .object({
    where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LikeUpdateWithoutArticleInputObjectSchema),
      z.lazy(() => LikeUncheckedUpdateWithoutArticleInputObjectSchema),
    ]),
  })
  .strict();

export const LikeUpdateWithWhereUniqueWithoutArticleInputObjectSchema = Schema;
