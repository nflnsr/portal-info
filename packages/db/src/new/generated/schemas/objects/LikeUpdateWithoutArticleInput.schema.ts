import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutLikeNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutLikeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUpdateWithoutArticleInput> = z
  .object({
    liked_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutLikeNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LikeUpdateWithoutArticleInputObjectSchema = Schema;
