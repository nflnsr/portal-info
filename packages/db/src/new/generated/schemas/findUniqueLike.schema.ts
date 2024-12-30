import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';

export const LikeFindUniqueSchema = z.object({
  where: LikeWhereUniqueInputObjectSchema,
});
