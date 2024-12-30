import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeUser_idArticle_idCompoundUniqueInput> = z
  .object({
    user_id: z.number(),
    article_id: z.number(),
  })
  .strict();

export const LikeUser_idArticle_idCompoundUniqueInputObjectSchema = Schema;
