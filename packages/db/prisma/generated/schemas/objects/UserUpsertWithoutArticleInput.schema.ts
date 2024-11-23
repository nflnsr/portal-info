import { z } from 'zod';
import { UserUpdateWithoutArticleInputObjectSchema } from './UserUpdateWithoutArticleInput.schema';
import { UserUncheckedUpdateWithoutArticleInputObjectSchema } from './UserUncheckedUpdateWithoutArticleInput.schema';
import { UserCreateWithoutArticleInputObjectSchema } from './UserCreateWithoutArticleInput.schema';
import { UserUncheckedCreateWithoutArticleInputObjectSchema } from './UserUncheckedCreateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutArticleInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutArticleInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutArticleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutArticleInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutArticleInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutArticleInputObjectSchema = Schema;
