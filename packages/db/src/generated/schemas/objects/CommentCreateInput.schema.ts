import { z } from 'zod';
import { ArticleCreateNestedOneWithoutCommentInputObjectSchema } from './ArticleCreateNestedOneWithoutCommentInput.schema';
import { UserCreateNestedOneWithoutCommentInputObjectSchema } from './UserCreateNestedOneWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    created_at: z.coerce.date().optional(),
    article: z.lazy(
      () => ArticleCreateNestedOneWithoutCommentInputObjectSchema,
    ),
    user: z.lazy(() => UserCreateNestedOneWithoutCommentInputObjectSchema),
  })
  .strict();

export const CommentCreateInputObjectSchema = Schema;
