import { z } from 'zod';
import { LikeOrderByWithRelationInputObjectSchema } from './objects/LikeOrderByWithRelationInput.schema';
import { LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';
import { LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';
import { LikeScalarFieldEnumSchema } from './enums/LikeScalarFieldEnum.schema';

export const LikeFindManySchema = z.object({
  orderBy: z
    .union([
      LikeOrderByWithRelationInputObjectSchema,
      LikeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LikeWhereInputObjectSchema.optional(),
  cursor: LikeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LikeScalarFieldEnumSchema).optional(),
});
