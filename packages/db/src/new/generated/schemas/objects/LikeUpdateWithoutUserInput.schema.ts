import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ArticleUpdateOneRequiredWithoutLiked_byNestedInputObjectSchema } from './ArticleUpdateOneRequiredWithoutLiked_byNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpdateWithoutUserInput> = z
  .object({
    liked_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    article: z
      .lazy(
        () => ArticleUpdateOneRequiredWithoutLiked_byNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LikeUpdateWithoutUserInputObjectSchema = Schema;
