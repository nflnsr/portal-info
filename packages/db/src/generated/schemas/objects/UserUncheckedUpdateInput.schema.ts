import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ArticleUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ArticleUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string().email(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string().min(6).max(20),
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
        z.lazy(() => RoleSchema),
        z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comment: z
      .lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    article: z
      .lazy(() => ArticleUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputObjectSchema = Schema;