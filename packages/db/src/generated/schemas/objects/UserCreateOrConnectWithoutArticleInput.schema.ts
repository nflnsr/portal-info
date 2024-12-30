import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutArticleInputObjectSchema } from './UserCreateWithoutArticleInput.schema';
import { UserUncheckedCreateWithoutArticleInputObjectSchema } from './UserUncheckedCreateWithoutArticleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutArticleInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutArticleInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutArticleInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutArticleInputObjectSchema = Schema;
