import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { ArticleCreateNestedManyWithoutUserInputObjectSchema } from './ArticleCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutCommentInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone_number: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    article: z
      .lazy(() => ArticleCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutCommentInputObjectSchema = Schema;
