import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { ArticleUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ArticleUncheckedCreateNestedManyWithoutUserInput.schema';
import { CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutLikeInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone_number: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    created_at: z.coerce.date().optional(),
    article: z
      .lazy(() => ArticleUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    comment: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutLikeInputObjectSchema = Schema;
