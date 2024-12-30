import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithoutUserInputObjectSchema } from './LikeUpdateWithoutUserInput.schema';
import { LikeUncheckedUpdateWithoutUserInputObjectSchema } from './LikeUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LikeUpdateWithoutUserInputObjectSchema),
      z.lazy(() => LikeUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const LikeUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
