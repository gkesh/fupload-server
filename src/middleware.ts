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

  app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(connectBusboy());

  return app;
};
