import { z } from 'zod';
import { UserUpdateWithoutLikeInputObjectSchema } from './UserUpdateWithoutLikeInput.schema';
import { UserUncheckedUpdateWithoutLikeInputObjectSchema } from './UserUncheckedUpdateWithoutLikeInput.schema';
import { UserCreateWithoutLikeInputObjectSchema } from './UserCreateWithoutLikeInput.schema';
import { UserUncheckedCreateWithoutLikeInputObjectSchema } from './UserUncheckedCreateWithoutLikeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutLikeInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutLikeInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutLikeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutLikeInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLikeInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutLikeInputObjectSchema = Schema;
