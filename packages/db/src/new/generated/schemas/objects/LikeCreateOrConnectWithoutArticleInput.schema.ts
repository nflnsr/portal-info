import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeCreateWithoutArticleInputObjectSchema } from './LikeCreateWithoutArticleInput.schema';
import { LikeUncheckedCreateWithoutArticleInputObjectSchema } from './LikeUncheckedCreateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateOrConnectWithoutArticleInput> = z
  .object({
    where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LikeCreateWithoutArticleInputObjectSchema),
      z.lazy(() => LikeUncheckedCreateWithoutArticleInputObjectSchema),
    ]),
  })
  .strict();

export const LikeCreateOrConnectWithoutArticleInputObjectSchema = Schema;
