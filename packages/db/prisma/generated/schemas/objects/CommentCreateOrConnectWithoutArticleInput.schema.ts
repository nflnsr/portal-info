import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutArticleInputObjectSchema } from './CommentCreateWithoutArticleInput.schema';
import { CommentUncheckedCreateWithoutArticleInputObjectSchema } from './CommentUncheckedCreateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateOrConnectWithoutArticleInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CommentCreateWithoutArticleInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutArticleInputObjectSchema),
    ]),
  })
  .strict();

export const CommentCreateOrConnectWithoutArticleInputObjectSchema = Schema;
