import "dotenv/config";
import "module-alias/register";
import express, { type Application } from "express";
import middleware from "~/middleware";
import http from "http";
import routes from "~/routes";
import { SERVER_PORT } from "@repo/utils/server";

const app: Application = express();

app.use(middleware);
app.use(routes);

const server = http.createServer(app);

const port = process.env.PORT || SERVER_PORT;

server
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
  .on("error", (err) => {
    throw new Error(err.message);
  });
