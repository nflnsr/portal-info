import { z } from 'zod';
import { LikeCreateWithoutArticleInputObjectSchema } from './LikeCreateWithoutArticleInput.schema';
import { LikeUncheckedCreateWithoutArticleInputObjectSchema } from './LikeUncheckedCreateWithoutArticleInput.schema';
import { LikeCreateOrConnectWithoutArticleInputObjectSchema } from './LikeCreateOrConnectWithoutArticleInput.schema';
import { LikeCreateManyArticleInputEnvelopeObjectSchema } from './LikeCreateManyArticleInputEnvelope.schema';
import { LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutArticleInput> =
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
      createMany: z
        .lazy(() => LikeCreateManyArticleInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputObjectSchema),
          z.lazy(() => LikeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedCreateNestedManyWithoutArticleInputObjectSchema =
  Schema;
