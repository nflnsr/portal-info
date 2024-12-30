import { CommentUncheckedUpdateInputObjectSchema } from "@repo/db/src/generated/schemas/objects/CommentUncheckedUpdateInput.schema";
import { z } from "zod";

export { CommentUncheckedUpdateInputObjectSchema as UpdateCommentSchema };
export type UpdateCommentType = z.infer<
  typeof CommentUncheckedUpdateInputObjectSchema
>;
