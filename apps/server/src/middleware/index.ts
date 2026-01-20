import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
// import "@repo/server-utils";
import { HttpException, responseHandler } from "@repo/server-utils";
import routes from "~/routes";
import { PrismaError } from "@repo/db";

const middleware = express();

middleware.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
    preflightContinue: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  }),
);

middleware.options("*", cors());
middleware.use(express.json());
middleware.use(express.urlencoded({ extended: true }));

middleware.use(routes);

middleware.use(
  (err: Error, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof HttpException) {
      responseHandler.optional({
        res,
        category: err.errorCategory,
        code: err.errorCode,
        message: err.message,
      });
    } else if (err instanceof PrismaError) {
      if (err.code === "P2002") {
        responseHandler.conflict({
          res,
          message: `${err.meta?.target} dari ${err.meta?.modelName} telah digunakan`,
        });

        return;
      } else if (err.code === "P2025") {
        responseHandler.notFound({
          res,
          message: `${err.meta?.target} dari ${err.meta?.modelName} tidak ditemukan`,
        });

        return;
      }
      console.log(err);
      responseHandler.internalServerError({
        res,
        message: `${err.meta?.cause} At ${err.meta?.modelName} table`,
      });

      return;
    } else {
      responseHandler.internalServerError({ res, message: err.message });

      return;
    }
  },
);

export default middleware;
