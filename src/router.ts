import { Application, Request, Response, static as expressStatic } from "express";
import { count, listAll } from "./services/reader";
import { createWriteStream } from "fs";
import { UPLOAD_DIR, VALID_MIMETYPES } from "./config";
import { File } from "./models/file";

export default (app: Application): Application => {
    app.get("/", (_, res: Response) => {
        // tslint:disable-next-line:no-console
        console.log("FUpload Server is currently live...");

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({server: "FUpload", message: "Welcome to FUpload!"}));
        return;
    });

    app.get("/all", async (_, res: Response) => {
        const all: File[] | null = await listAll();

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(all ?? { error: "Failed to read files!" }));
        return;
    });

    app.get("/count", (_, res: Response) => {
        const total = count();

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({total}));
        return;
    });

    app.post("/upload", async (req: Request, res: Response) => {
        try {
            const rejected: { [fileId: string]: string } = {};
            const uploaded: { [fileId: string]: string } = {};

            req.pipe(req.busboy);

            req.busboy.on("file", async (name, stream, filename) => {
                if (!VALID_MIMETYPES.includes(filename.mimeType)) {
                    rejected[name] = `Invalid MimeType - ${filename.mimeType}`;
                    return;
                }

                const storedName = String(Date.now()) + "_" + filename.filename.replace(" ", "_");
                const writer = createWriteStream(UPLOAD_DIR + storedName);

                stream.pipe(writer);

                stream.on("error", () => {
                    rejected[name] = `Failed to write - ${filename.filename}`;
                    return;
                }).on("close", () => {
                    uploaded[name] = storedName;
                });
            });

            req.busboy.on("finish", () => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                    rejected,
                    uploaded
                }));
            });
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // Make upload folder accessible
    app.use("/uploads", expressStatic(UPLOAD_DIR));

    return app;
}