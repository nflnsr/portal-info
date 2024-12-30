import { z } from 'zod';
import { LikeScalarWhereInputObjectSchema } from './LikeScalarWhereInput.schema';
import { LikeUpdateManyMutationInputObjectSchema } from './LikeUpdateManyMutationInput.schema';
import { LikeUncheckedUpdateManyWithoutLikeInputObjectSchema } from './LikeUncheckedUpdateManyWithoutLikeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => LikeScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => LikeUpdateManyMutationInputObjectSchema),
      z.lazy(() => LikeUncheckedUpdateManyWithoutLikeInputObjectSchema),
    ]),
  })
  .strict() as z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutUserInput>;

export const LikeUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
