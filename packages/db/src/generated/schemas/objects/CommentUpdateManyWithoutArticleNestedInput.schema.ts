import { z } from 'zod';
import { CommentCreateWithoutArticleInputObjectSchema } from './CommentCreateWithoutArticleInput.schema';
import { CommentUncheckedCreateWithoutArticleInputObjectSchema } from './CommentUncheckedCreateWithoutArticleInput.schema';
import { CommentCreateOrConnectWithoutArticleInputObjectSchema } from './CommentCreateOrConnectWithoutArticleInput.schema';
import { CommentUpsertWithWhereUniqueWithoutArticleInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutArticleInput.schema';
import { CommentCreateManyArticleInputEnvelopeObjectSchema } from './CommentCreateManyArticleInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutArticleInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutArticleInput.schema';
import { CommentUpdateManyWithWhereWithoutArticleInputObjectSchema } from './CommentUpdateManyWithWhereWithoutArticleInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateManyWithoutArticleNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => CommentUpsertWithWhereUniqueWithoutArticleInputObjectSchema,
        ),
        z
          .lazy(
            () => CommentUpsertWithWhereUniqueWithoutArticleInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CommentCreateManyArticleInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => CommentUpdateWithWhereUniqueWithoutArticleInputObjectSchema,
        ),
        z
          .lazy(
            () => CommentUpdateWithWhereUniqueWithoutArticleInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => CommentUpdateManyWithWhereWithoutArticleInputObjectSchema),
        z
          .lazy(() => CommentUpdateManyWithWhereWithoutArticleInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => CommentScalarWhereInputObjectSchema),
        z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CommentUpdateManyWithoutArticleNestedInputObjectSchema = Schema;
