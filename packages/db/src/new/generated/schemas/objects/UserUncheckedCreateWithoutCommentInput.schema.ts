import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { ArticleUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ArticleUncheckedCreateNestedManyWithoutUserInput.schema';
import { LikeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './LikeUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutCommentInput> = z
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
    like: z
      .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutCommentInputObjectSchema = Schema;
