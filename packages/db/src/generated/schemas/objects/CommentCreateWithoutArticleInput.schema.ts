import { z } from 'zod';
import { UserCreateNestedOneWithoutCommentInputObjectSchema } from './UserCreateNestedOneWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutArticleInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    created_at: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCommentInputObjectSchema),
  })
  .strict();

export const CommentCreateWithoutArticleInputObjectSchema = Schema;
