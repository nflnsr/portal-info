import { UserUncheckedCreateInputObjectSchema } from "@repo/db/src/generated/schemas/objects/UserUncheckedCreateInput.schema";
import { z } from "zod";

export { UserUncheckedCreateInputObjectSchema as CreateUserSchema };
export type CreateUserType = z.infer<
  typeof UserUncheckedCreateInputObjectSchema
>;