import { z } from 'zod';
import { LikeCreateWithoutUserInputObjectSchema } from './LikeCreateWithoutUserInput.schema';
import { LikeUncheckedCreateWithoutUserInputObjectSchema } from './LikeUncheckedCreateWithoutUserInput.schema';
import { LikeCreateOrConnectWithoutUserInputObjectSchema } from './LikeCreateOrConnectWithoutUserInput.schema';
import { LikeUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './LikeUpsertWithWhereUniqueWithoutUserInput.schema';
import { LikeCreateManyUserInputEnvelopeObjectSchema } from './LikeCreateManyUserInputEnvelope.schema';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './LikeUpdateWithWhereUniqueWithoutUserInput.schema';
import { LikeUpdateManyWithWhereWithoutUserInputObjectSchema } from './LikeUpdateManyWithWhereWithoutUserInput.schema';
import { LikeScalarWhereInputObjectSchema } from './LikeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => LikeCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => LikeWhereUniqueInputObjectSchema),
        z.lazy(() => LikeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => LikeWhereUniqueInputObjectSchema),
        z.lazy(() => LikeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => LikeWhereUniqueInputObjectSchema),
        z.lazy(() => LikeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LikeWhereUniqueInputObjectSchema),
        z.lazy(() => LikeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => LikeUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => LikeScalarWhereInputObjectSchema),
        z.lazy(() => LikeScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LikeUpdateManyWithoutUserNestedInputObjectSchema = Schema;
