import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ArticleUpdateOneRequiredWithoutCommentNestedInputObjectSchema } from './ArticleUpdateOneRequiredWithoutCommentNestedInput.schema';
import { UserUpdateOneRequiredWithoutCommentNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCommentNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comment: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    article: z
      .lazy(() => ArticleUpdateOneRequiredWithoutCommentNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutCommentNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CommentUpdateInputObjectSchema = Schema;
