import { z } from 'zod';
import { LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';
import { LikeOrderByWithAggregationInputObjectSchema } from './objects/LikeOrderByWithAggregationInput.schema';
import { LikeScalarWhereWithAggregatesInputObjectSchema } from './objects/LikeScalarWhereWithAggregatesInput.schema';
import { LikeScalarFieldEnumSchema } from './enums/LikeScalarFieldEnum.schema';

export const LikeGroupBySchema = z.object({
  where: LikeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LikeOrderByWithAggregationInputObjectSchema,
      LikeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LikeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LikeScalarFieldEnumSchema),
});
