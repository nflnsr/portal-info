import { z } from 'zod';
import { LikeUpdateInputObjectSchema } from './objects/LikeUpdateInput.schema';
import { LikeUncheckedUpdateInputObjectSchema } from './objects/LikeUncheckedUpdateInput.schema';
import { LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';

export const LikeUpdateOneSchema = z.object({
  data: z.union([
    LikeUpdateInputObjectSchema,
    LikeUncheckedUpdateInputObjectSchema,
  ]),
  where: LikeWhereUniqueInputObjectSchema,
});
