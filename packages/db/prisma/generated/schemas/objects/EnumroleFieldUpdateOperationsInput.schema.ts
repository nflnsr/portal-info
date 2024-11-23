import { z } from 'zod';
import { roleSchema } from '../enums/role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumroleFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => roleSchema).optional(),
  })
  .strict();

export const EnumroleFieldUpdateOperationsInputObjectSchema = Schema;
