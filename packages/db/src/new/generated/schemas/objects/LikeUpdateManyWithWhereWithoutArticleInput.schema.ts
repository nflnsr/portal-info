import { z } from 'zod';
import { LikeScalarWhereInputObjectSchema } from './LikeScalarWhereInput.schema';
import { LikeUpdateManyMutationInputObjectSchema } from './LikeUpdateManyMutationInput.schema';
import { LikeUncheckedUpdateManyWithoutLiked_byInputObjectSchema } from './LikeUncheckedUpdateManyWithoutLiked_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutArticleInput> = z
  .object({
    where: z.lazy(() => LikeScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => LikeUpdateManyMutationInputObjectSchema),
      z.lazy(() => LikeUncheckedUpdateManyWithoutLiked_byInputObjectSchema),
    ]),
  })
  .strict() as z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutArticleInput>;

export const LikeUpdateManyWithWhereWithoutArticleInputObjectSchema = Schema;
