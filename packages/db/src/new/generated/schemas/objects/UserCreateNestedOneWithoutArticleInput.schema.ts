import { z } from 'zod';
import { UserCreateWithoutArticleInputObjectSchema } from './UserCreateWithoutArticleInput.schema';
import { UserUncheckedCreateWithoutArticleInputObjectSchema } from './UserUncheckedCreateWithoutArticleInput.schema';
import { UserCreateOrConnectWithoutArticleInputObjectSchema } from './UserCreateOrConnectWithoutArticleInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutArticleInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutArticleInputObjectSchema = Schema;
