import { z } from 'zod';
import { UserCreateWithoutLikeInputObjectSchema } from './UserCreateWithoutLikeInput.schema';
import { UserUncheckedCreateWithoutLikeInputObjectSchema } from './UserUncheckedCreateWithoutLikeInput.schema';
import { UserCreateOrConnectWithoutLikeInputObjectSchema } from './UserCreateOrConnectWithoutLikeInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutLikeInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutLikeInputObjectSchema = Schema;
