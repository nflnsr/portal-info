import { z } from 'zod';
import { UserCreateWithoutArticleInputObjectSchema } from './UserCreateWithoutArticleInput.schema';
import { UserUncheckedCreateWithoutArticleInputObjectSchema } from './UserUncheckedCreateWithoutArticleInput.schema';
import { UserCreateOrConnectWithoutArticleInputObjectSchema } from './UserCreateOrConnectWithoutArticleInput.schema';
import { UserUpsertWithoutArticleInputObjectSchema } from './UserUpsertWithoutArticleInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutArticleInputObjectSchema } from './UserUpdateWithoutArticleInput.schema';
import { UserUncheckedUpdateWithoutArticleInputObjectSchema } from './UserUncheckedUpdateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutArticleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutArticleInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutArticleInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutArticleInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutArticleInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutArticleInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutArticleInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutArticleNestedInputObjectSchema =
  Schema;
