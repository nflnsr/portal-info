import { z } from 'zod';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';
import { CommentUpdateManyMutationInputObjectSchema } from './CommentUpdateManyMutationInput.schema';
import { CommentUncheckedUpdateManyWithoutCommentInputObjectSchema } from './CommentUncheckedUpdateManyWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema = z
  .object({
    where: z.lazy(() => CommentScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CommentUpdateManyMutationInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateManyWithoutCommentInputObjectSchema),
    ]),
  })
  .strict() as z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutUserInput>;

export const CommentUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;