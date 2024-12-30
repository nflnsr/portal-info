import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithoutUserInputObjectSchema } from './LikeUpdateWithoutUserInput.schema';
import { LikeUncheckedUpdateWithoutUserInputObjectSchema } from './LikeUncheckedUpdateWithoutUserInput.schema';
import { LikeCreateWithoutUserInputObjectSchema } from './LikeCreateWithoutUserInput.schema';
import { LikeUncheckedCreateWithoutUserInputObjectSchema } from './LikeUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LikeUpdateWithoutUserInputObjectSchema),
      z.lazy(() => LikeUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LikeCreateWithoutUserInputObjectSchema),
      z.lazy(() => LikeUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const LikeUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
