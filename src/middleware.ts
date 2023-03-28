import { Application } from "express";
import cors from "cors";
import connectBusboy from "connect-busboy";

export default (app: Application): Application => {
  app.use(
    cors({
      origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
      credentials: false,
    })
  );

  app.use(connectBusboy());

  return app;
};
