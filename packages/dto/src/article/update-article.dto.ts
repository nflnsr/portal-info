import { ArticleUncheckedUpdateInputObjectSchema } from "@repo/db/src/generated/schemas/objects/ArticleUncheckedUpdateInput.schema";
import { z } from "zod";

export { ArticleUncheckedUpdateInputObjectSchema as UpdateArticleSchema };
export type UpdateArticleType = z.infer<
  typeof ArticleUncheckedUpdateInputObjectSchema
>;
