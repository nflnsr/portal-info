import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeCreateWithoutUserInputObjectSchema } from './LikeCreateWithoutUserInput.schema';
import { LikeUncheckedCreateWithoutUserInputObjectSchema } from './LikeUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LikeCreateWithoutUserInputObjectSchema),
      z.lazy(() => LikeUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const LikeCreateOrConnectWithoutUserInputObjectSchema = Schema;
