import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { CommentCreateNestedManyWithoutUserInputObjectSchema } from './CommentCreateNestedManyWithoutUserInput.schema';
import { LikeCreateNestedManyWithoutUserInputObjectSchema } from './LikeCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutArticleInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone_number: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    created_at: z.coerce.date().optional(),
    comment: z
      .lazy(() => CommentCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    like: z
      .lazy(() => LikeCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutArticleInputObjectSchema = Schema;
