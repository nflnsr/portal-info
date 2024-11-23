import { UserUncheckedCreateInputObjectSchema } from "@repo/db/prisma/generated/schemas/objects/UserUncheckedCreateInput.schema";
import { z } from "zod";

type CreateUserSchema = typeof UserUncheckedCreateInputObjectSchema;
type CreateUserType = z.infer<
  typeof UserUncheckedCreateInputObjectSchema
>;

export type { CreateUserType, CreateUserSchema };