import { ArticleUncheckedCreateInputObjectSchema } from "@repo/db/src/generated/schemas/objects/ArticleUncheckedCreateInput.schema";
import { z } from "zod";

export { ArticleUncheckedCreateInputObjectSchema as CreateArticleSchema };
export type CreateArticleType = z.infer<
  typeof ArticleUncheckedCreateInputObjectSchema
>;