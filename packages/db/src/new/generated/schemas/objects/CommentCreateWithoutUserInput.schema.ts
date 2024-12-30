import { z } from 'zod';
import { ArticleCreateNestedOneWithoutCommentInputObjectSchema } from './ArticleCreateNestedOneWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    created_at: z.coerce.date().optional(),
    article: z.lazy(
      () => ArticleCreateNestedOneWithoutCommentInputObjectSchema,
    ),
  })
  .strict();

export const CommentCreateWithoutUserInputObjectSchema = Schema;
