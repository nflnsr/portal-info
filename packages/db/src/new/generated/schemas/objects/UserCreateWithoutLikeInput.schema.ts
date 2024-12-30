import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { ArticleCreateNestedManyWithoutUserInputObjectSchema } from './ArticleCreateNestedManyWithoutUserInput.schema';
import { CommentCreateNestedManyWithoutUserInputObjectSchema } from './CommentCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutLikeInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone_number: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    created_at: z.coerce.date().optional(),
    article: z
      .lazy(() => ArticleCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    comment: z
      .lazy(() => CommentCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutLikeInputObjectSchema = Schema;
