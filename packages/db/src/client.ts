import { PrismaClient, Prisma } from "@prisma/client";

export const prisma = new PrismaClient();

export const PrismaError = Prisma.PrismaClientKnownRequestError;

// type dbModel = "User" | "Article" | "Comment";

// export class PrismaError extends Prisma.PrismaClientKnownRequestError {
//   meta?: {
//     modelName: dbModel;
//     cause: string;
//   };

//   constructor(modelName: dbModel, cause: string, message: string) {
//     super(message, {
//       meta: {
//         modelName,
//         cause,
//       },
//     });

//     this.meta = {
//       modelName,
//       cause,
//     };
//   }
// }
