import { CommentUncheckedCreateInputObjectSchema } from "@repo/db/src/generated/schemas/objects/CommentUncheckedCreateInput.schema";
import { z } from "zod";

export { CommentUncheckedCreateInputObjectSchema as CreateCommentSchema };
export type CreateCommentType = z.infer<
  typeof CommentUncheckedCreateInputObjectSchema
>;
