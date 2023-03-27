import express, { Application } from "express";
import middleware from "./middleware";
import { UPLOAD_DIR } from "./config";
import router from "./router";

const app: Application = router(middleware(express()));
const PORT = process.env.port || 8081;

// Make upload folder accessible
app.use(express.static(UPLOAD_DIR));

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`FUpload server started at: localhost:${PORT}`);
});
