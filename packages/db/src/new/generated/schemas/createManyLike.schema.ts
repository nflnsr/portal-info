import { z } from 'zod';
import { LikeCreateManyInputObjectSchema } from './objects/LikeCreateManyInput.schema';

export const LikeCreateManySchema = z.object({
  data: z.union([
    LikeCreateManyInputObjectSchema,
    z.array(LikeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
