import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithoutArticleInputObjectSchema } from './LikeUpdateWithoutArticleInput.schema';
import { LikeUncheckedUpdateWithoutArticleInputObjectSchema } from './LikeUncheckedUpdateWithoutArticleInput.schema';
import { LikeCreateWithoutArticleInputObjectSchema } from './LikeCreateWithoutArticleInput.schema';
import { LikeUncheckedCreateWithoutArticleInputObjectSchema } from './LikeUncheckedCreateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutArticleInput> = z
  .object({
    where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LikeUpdateWithoutArticleInputObjectSchema),
      z.lazy(() => LikeUncheckedUpdateWithoutArticleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LikeCreateWithoutArticleInputObjectSchema),
      z.lazy(() => LikeUncheckedCreateWithoutArticleInputObjectSchema),
    ]),
  })
  .strict();

export const LikeUpsertWithWhereUniqueWithoutArticleInputObjectSchema = Schema;
