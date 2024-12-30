import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone_number: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    created_at: z.coerce.date().optional(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
