import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { roleSchema } from '../enums/role.schema';
import { EnumroleFieldUpdateOperationsInputObjectSchema } from './EnumroleFieldUpdateOperationsInput.schema';
import { ArticleUpdateManyWithoutUserNestedInputObjectSchema } from './ArticleUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutCommentInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    phone_number: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .union([
        z.lazy(() => roleSchema),
        z.lazy(() => EnumroleFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    article: z
      .lazy(() => ArticleUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutCommentInputObjectSchema = Schema;
