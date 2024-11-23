import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    id: z.number(),
    email: z.string().optional(),
    phone_number: z.string().optional(),
  })
  .strict();

export const UserWhereUniqueInputObjectSchema = Schema;
