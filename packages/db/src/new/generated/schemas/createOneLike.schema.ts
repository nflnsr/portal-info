import { z } from 'zod';
import { LikeCreateInputObjectSchema } from './objects/LikeCreateInput.schema';
import { LikeUncheckedCreateInputObjectSchema } from './objects/LikeUncheckedCreateInput.schema';

export const LikeCreateOneSchema = z.object({
  data: z.union([
    LikeCreateInputObjectSchema,
    LikeUncheckedCreateInputObjectSchema,
  ]),
});
