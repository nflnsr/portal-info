import { z } from 'zod';
import { LikeCreateWithoutArticleInputObjectSchema } from './LikeCreateWithoutArticleInput.schema';
import { LikeUncheckedCreateWithoutArticleInputObjectSchema } from './LikeUncheckedCreateWithoutArticleInput.schema';
import { LikeCreateOrConnectWithoutArticleInputObjectSchema } from './LikeCreateOrConnectWithoutArticleInput.schema';
import { LikeUpsertWithWhereUniqueWithoutArticleInputObjectSchema } from './LikeUpsertWithWhereUniqueWithoutArticleInput.schema';
import { LikeCreateManyArticleInputEnvelopeObjectSchema } from './LikeCreateManyArticleInputEnvelope.schema';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithWhereUniqueWithoutArticleInputObjectSchema } from './LikeUpdateWithWhereUniqueWithoutArticleInput.schema';
import { LikeUpdateManyWithWhereWithoutArticleInputObjectSchema } from './LikeUpdateManyWithWhereWithoutArticleInput.schema';
import { LikeScalarWhereInputObjectSchema } from './LikeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutArticleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutArticleInputObjectSchema),
          z.lazy(() => LikeCreateWithoutArticleInputObjectSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutArticleInputObjectSchema),
          z
            .lazy(() => LikeUncheckedCreateWithoutArticleInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutArticleInputObjectSchema),
          z
            .lazy(() => LikeCreateOrConnectWithoutArticleInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => LikeUpsertWithWhereUniqueWithoutArticleInputObjectSchema,
          ),
          z
            .lazy(
              () => LikeUpsertWithWhereUniqueWithoutArticleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyArticleInputEnvelopeObjectSchema)
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
          z.lazy(
            () => LikeUpdateWithWhereUniqueWithoutArticleInputObjectSchema,
          ),
          z
            .lazy(
              () => LikeUpdateWithWhereUniqueWithoutArticleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutArticleInputObjectSchema),
          z
            .lazy(() => LikeUpdateManyWithWhereWithoutArticleInputObjectSchema)
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

export const LikeUncheckedUpdateManyWithoutArticleNestedInputObjectSchema =
  Schema;
