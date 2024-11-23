import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodSchema } from "zod";

export const validate =
  <T>(schema: ZodSchema<T>): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    const { success, error, data } = schema.safeParse(req.body);
    if (!success) {
      res.status(400).json({
        success: success,
        errors: error,
        data,
      });
      return;
    }
    next();
  };
