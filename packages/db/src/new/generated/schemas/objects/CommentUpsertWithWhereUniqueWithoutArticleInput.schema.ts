import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutArticleInputObjectSchema } from './CommentUpdateWithoutArticleInput.schema';
import { CommentUncheckedUpdateWithoutArticleInputObjectSchema } from './CommentUncheckedUpdateWithoutArticleInput.schema';
import { CommentCreateWithoutArticleInputObjectSchema } from './CommentCreateWithoutArticleInput.schema';
import { CommentUncheckedCreateWithoutArticleInputObjectSchema } from './CommentUncheckedCreateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutArticleInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CommentUpdateWithoutArticleInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutArticleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CommentCreateWithoutArticleInputObjectSchema),
        z.lazy(() => CommentUncheckedCreateWithoutArticleInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpsertWithWhereUniqueWithoutArticleInputObjectSchema =
  Schema;
