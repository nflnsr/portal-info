import { z } from 'zod';
import { UserCreateWithoutLikeInputObjectSchema } from './UserCreateWithoutLikeInput.schema';
import { UserUncheckedCreateWithoutLikeInputObjectSchema } from './UserUncheckedCreateWithoutLikeInput.schema';
import { UserCreateOrConnectWithoutLikeInputObjectSchema } from './UserCreateOrConnectWithoutLikeInput.schema';
import { UserUpsertWithoutLikeInputObjectSchema } from './UserUpsertWithoutLikeInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLikeInputObjectSchema } from './UserUpdateWithoutLikeInput.schema';
import { UserUncheckedUpdateWithoutLikeInputObjectSchema } from './UserUncheckedUpdateWithoutLikeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLikeNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutLikeInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutLikeInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutLikeInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutLikeInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutLikeInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutLikeInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutLikeNestedInputObjectSchema = Schema;
