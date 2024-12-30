import { UserUncheckedUpdateInputObjectSchema } from "@repo/db/src/generated/schemas/objects/UserUncheckedUpdateInput.schema";
import { z } from "zod";

export { UserUncheckedUpdateInputObjectSchema as UpdateUserSchema };
export type UpdateUserType = z.infer<
  typeof UserUncheckedUpdateInputObjectSchema
>;
