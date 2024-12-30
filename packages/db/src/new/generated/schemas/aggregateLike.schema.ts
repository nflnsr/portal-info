import { z } from 'zod';
import { LikeOrderByWithRelationInputObjectSchema } from './objects/LikeOrderByWithRelationInput.schema';
import { LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';
import { LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';
import { LikeCountAggregateInputObjectSchema } from './objects/LikeCountAggregateInput.schema';
import { LikeMinAggregateInputObjectSchema } from './objects/LikeMinAggregateInput.schema';
import { LikeMaxAggregateInputObjectSchema } from './objects/LikeMaxAggregateInput.schema';
import { LikeAvgAggregateInputObjectSchema } from './objects/LikeAvgAggregateInput.schema';
import { LikeSumAggregateInputObjectSchema } from './objects/LikeSumAggregateInput.schema';

export const LikeAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), LikeCountAggregateInputObjectSchema])
    .optional(),
  _min: LikeMinAggregateInputObjectSchema.optional(),
  _max: LikeMaxAggregateInputObjectSchema.optional(),
  _avg: LikeAvgAggregateInputObjectSchema.optional(),
  _sum: LikeSumAggregateInputObjectSchema.optional(),
});
