import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLikeInputObjectSchema } from './UserCreateWithoutLikeInput.schema';
import { UserUncheckedCreateWithoutLikeInputObjectSchema } from './UserUncheckedCreateWithoutLikeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutLikeInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutLikeInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLikeInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutLikeInputObjectSchema = Schema;
