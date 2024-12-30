import { z } from 'zod';
import { LikeUser_idArticle_idCompoundUniqueInputObjectSchema } from './LikeUser_idArticle_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeWhereUniqueInput> = z
  .object({
    user_id_article_id: z.lazy(() => LikeUser_idArticle_idCompoundUniqueInputObjectSchema),
  })
  .strict();

export const LikeWhereUniqueInputObjectSchema = Schema;
