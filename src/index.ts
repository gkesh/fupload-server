import express, { Application } from "express";
import middleware from "./middleware";
import router from "./router";

const app: Application = router(middleware(express()));
const PORT = process.env.port || 8081;

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`FUpload server started at: localhost:${PORT}`);
});
