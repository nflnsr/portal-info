import { z } from 'zod';
import { roleSchema } from '../enums/role.schema';
import { ArticleUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ArticleUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutCommentInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone_number: z.string(),
    role: z.lazy(() => roleSchema).optional(),
    article: z
      .lazy(() => ArticleUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutCommentInputObjectSchema = Schema;