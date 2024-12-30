import { z } from 'zod';
import { ArticleCreateManyInputObjectSchema } from './objects/ArticleCreateManyInput.schema';

export const ArticleCreateManySchema = z.object({
  data: z.union([
    ArticleCreateManyInputObjectSchema,
    z.array(ArticleCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
