import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

type LikeUncheckedUpdateManyWithoutLiked_byInput =
  Prisma.LikeUncheckedUpdateManyWithoutUserInput;

const Schema: z.ZodType<LikeUncheckedUpdateManyWithoutLiked_byInput> = z
  .object({
    user_id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    liked_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LikeUncheckedUpdateManyWithoutLiked_byInputObjectSchema = Schema;
