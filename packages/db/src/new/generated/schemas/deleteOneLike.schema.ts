import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';

export const LikeDeleteOneSchema = z.object({
  where: LikeWhereUniqueInputObjectSchema,
});
