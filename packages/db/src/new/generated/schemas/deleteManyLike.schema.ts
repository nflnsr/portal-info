import { z } from 'zod';
import { LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';

export const LikeDeleteManySchema = z.object({
  where: LikeWhereInputObjectSchema.optional(),
});
