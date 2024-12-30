import "dotenv/config";
import "module-alias/register";
import express, { type Application } from "express";
import middleware from "~/middleware";
import http from "http";
import { SERVER_PORT } from "@repo/server-utils";

const app: Application = express();

app.use(middleware);

const server = http.createServer(app);

const port = process.env.PORT || SERVER_PORT;

server
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Server error:", err.message);
  });
