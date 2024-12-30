import { z } from 'zod';
import { CommentCreateWithoutArticleInputObjectSchema } from './CommentCreateWithoutArticleInput.schema';
import { CommentUncheckedCreateWithoutArticleInputObjectSchema } from './CommentUncheckedCreateWithoutArticleInput.schema';
import { CommentCreateOrConnectWithoutArticleInputObjectSchema } from './CommentCreateOrConnectWithoutArticleInput.schema';
import { CommentCreateManyArticleInputEnvelopeObjectSchema } from './CommentCreateManyArticleInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutArticleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutArticleInputObjectSchema),
          z.lazy(() => CommentCreateWithoutArticleInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutArticleInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutArticleInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutArticleInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutArticleInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyArticleInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedCreateNestedManyWithoutArticleInputObjectSchema =
  Schema;
