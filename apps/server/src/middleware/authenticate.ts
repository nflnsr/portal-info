import { responseHandler, verifyAccessToken } from "@repo/server-utils";
import { Request, Response, NextFunction } from "express";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (token === undefined) {
    responseHandler.unauthorized({
      res,
      message: "Token is required",
    });

    return;
  }
  console.log(token);
  const user = verifyAccessToken(token!);
  console.log(user);
  if (user === null) {
    responseHandler.unauthorized({
      res,
      message: "Invalid token",
    });

    return;
  }
  next();
};
