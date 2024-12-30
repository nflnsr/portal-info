import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { Article_CategorySchema } from '../enums/Article_Category.schema';
import { NullableEnumArticle_CategoryFieldUpdateOperationsInputObjectSchema } from './NullableEnumArticle_CategoryFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ArticleUpdatetagsInputObjectSchema } from './ArticleUpdatetagsInput.schema';
import { CommentUpdateManyWithoutArticleNestedInputObjectSchema } from './CommentUpdateManyWithoutArticleNestedInput.schema';
import { UserUpdateOneRequiredWithoutArticleNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutArticleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArticleUpdateInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    like: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comment_count: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    category: z
      .union([
        z.lazy(() => Article_CategorySchema),
        z.lazy(
          () =>
            NullableEnumArticle_CategoryFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional()
      .nullable(),
    topic: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    writter: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tags: z
      .union([
        z.lazy(() => ArticleUpdatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    comment: z
      .lazy(() => CommentUpdateManyWithoutArticleNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutArticleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArticleUpdateInputObjectSchema = Schema;
