import { responseHandler } from "@repo/server-utils";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodError, ZodSchema } from "zod";

export const validate =
  <T>(schema: ZodSchema<T>): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    const parseBody = schema.safeParse(req.body);
    if (!parseBody.success) {
      const statusCode = statusCodeCheck<T>(parseBody.error);
      responseHandler.optional({
        category: "client_error",
        code: statusCode,
        res,
        message: messageGenerator<T>(parseBody.error),
      });
    }
    next();
  };

const statusCodeCheck = <T>(error: ZodError<T>) => {
  if (error.errors.some(err => err.message === "Required")) {
    return 400;
  } else {
    return 422;
  }
};

const messageGenerator = <T>(error: ZodError<T>) => {
  return (
    error.errors
      .map(
        (err) =>
          `${err.message} at ${err.path[0].toString().replace("_", " ")}`,
      )
      .join(". ") + "."
  );
};
