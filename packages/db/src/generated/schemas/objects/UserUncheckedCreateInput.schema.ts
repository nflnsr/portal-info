import { z } from "zod";
import { RoleSchema } from "../enums/Role.schema";
import { CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./CommentUncheckedCreateNestedManyWithoutUserInput.schema";
import { ArticleUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./ArticleUncheckedCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(6).max(20),
    confirm_password: z.string().min(6).max(20),
    phone_number: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    comment: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    article: z
      .lazy(() => ArticleUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()
  .refine((data) => data.password === data.confirm_password, {
    message: "Konfirmasi password harus sama",
    path: ["password", "confirm_password"],
  });

export const UserUncheckedCreateInputObjectSchema = Schema;
