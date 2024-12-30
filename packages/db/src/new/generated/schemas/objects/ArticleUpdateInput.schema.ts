import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { Article_CategorySchema } from '../enums/Article_Category.schema';
import { NullableEnumArticle_CategoryFieldUpdateOperationsInputObjectSchema } from './NullableEnumArticle_CategoryFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ArticleUpdatetagsInputObjectSchema } from './ArticleUpdatetagsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutArticleNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutArticleNestedInput.schema';
import { LikeUpdateManyWithoutArticleNestedInputObjectSchema } from './LikeUpdateManyWithoutArticleNestedInput.schema';
import { CommentUpdateManyWithoutArticleNestedInputObjectSchema } from './CommentUpdateManyWithoutArticleNestedInput.schema';

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
    like_count: z
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
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutArticleNestedInputObjectSchema)
      .optional(),
    liked_by: z
      .lazy(() => LikeUpdateManyWithoutArticleNestedInputObjectSchema)
      .optional(),
    comment: z
      .lazy(() => CommentUpdateManyWithoutArticleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArticleUpdateInputObjectSchema = Schema;
