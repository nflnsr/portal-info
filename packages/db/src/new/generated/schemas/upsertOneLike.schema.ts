import { z } from 'zod';
import { LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';
import { LikeCreateInputObjectSchema } from './objects/LikeCreateInput.schema';
import { LikeUncheckedCreateInputObjectSchema } from './objects/LikeUncheckedCreateInput.schema';
import { LikeUpdateInputObjectSchema } from './objects/LikeUpdateInput.schema';
import { LikeUncheckedUpdateInputObjectSchema } from './objects/LikeUncheckedUpdateInput.schema';

export const LikeUpsertSchema = z.object({
  where: LikeWhereUniqueInputObjectSchema,
  create: z.union([
    LikeCreateInputObjectSchema,
    LikeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    LikeUpdateInputObjectSchema,
    LikeUncheckedUpdateInputObjectSchema,
  ]),
});
