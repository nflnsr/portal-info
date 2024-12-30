import { z } from 'zod';
import { LikeCreateWithoutUserInputObjectSchema } from './LikeCreateWithoutUserInput.schema';
import { LikeUncheckedCreateWithoutUserInputObjectSchema } from './LikeUncheckedCreateWithoutUserInput.schema';
import { LikeCreateOrConnectWithoutUserInputObjectSchema } from './LikeCreateOrConnectWithoutUserInput.schema';
import { LikeCreateManyUserInputEnvelopeObjectSchema } from './LikeCreateManyUserInputEnvelope.schema';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LikeCreateWithoutUserInputObjectSchema),
        z.lazy(() => LikeCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => LikeUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => LikeUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => LikeCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => LikeCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => LikeCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => LikeWhereUniqueInputObjectSchema),
        z.lazy(() => LikeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LikeCreateNestedManyWithoutUserInputObjectSchema = Schema;
