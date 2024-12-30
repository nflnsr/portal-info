import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutArticleInputObjectSchema } from './CommentUpdateWithoutArticleInput.schema';
import { CommentUncheckedUpdateWithoutArticleInputObjectSchema } from './CommentUncheckedUpdateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutArticleInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CommentUpdateWithoutArticleInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutArticleInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpdateWithWhereUniqueWithoutArticleInputObjectSchema =
  Schema;
