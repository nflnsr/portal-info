import express from "express";
import cors from "cors";
import "@repo/utils/server";

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

export default middleware;
