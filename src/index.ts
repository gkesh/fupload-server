import express, { Application } from "express";
import router from "./router";

// Middlewares
import cors from "cors";
import fileUpload from "express-fileupload";
import {
  json as bodyParserJson,
  urlencoded as bodyParserUrlEncoded,
} from "body-parser";

const app: Application = router(express());
const PORT = process.env.port || 8081;

app.use(cors());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(bodyParserJson());
app.use(bodyParserUrlEncoded({ extended: true }));

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`FUpload server started at: localhost:${PORT}`);
});
