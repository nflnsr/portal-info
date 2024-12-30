import { z } from 'zod';
import { LikeUpdateManyMutationInputObjectSchema } from './objects/LikeUpdateManyMutationInput.schema';
import { LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';

export const LikeUpdateManySchema = z.object({
  data: LikeUpdateManyMutationInputObjectSchema,
  where: LikeWhereInputObjectSchema.optional(),
});
