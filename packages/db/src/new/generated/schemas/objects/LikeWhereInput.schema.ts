import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ArticleRelationFilterObjectSchema } from './ArticleRelationFilter.schema';
import { ArticleWhereInputObjectSchema } from './ArticleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LikeWhereInputObjectSchema),
        z.lazy(() => LikeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LikeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LikeWhereInputObjectSchema),
        z.lazy(() => LikeWhereInputObjectSchema).array(),
      ])
      .optional(),
    user_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    article_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    liked_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    article: z
      .union([
        z.lazy(() => ArticleRelationFilterObjectSchema),
        z.lazy(() => ArticleWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict() as z.ZodType<Prisma.LikeWhereInput>;

export const LikeWhereInputObjectSchema = Schema;
