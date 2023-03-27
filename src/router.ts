import { Application, Request, Response } from 'express';
import { count, listAll } from './services/reader';

export default (app: Application): Application => {
    app.get('/', (_, res: Response) => {
        // tslint:disable-next-line:no-console
        console.log("FUpload Server is currently live...");

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({server: "FUpload", message: "Welcome to FUpload!"}));
        return;
    });

    app.get('/all', (_, res: Response) => {
        const all: string[] = listAll();

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(all));
        return;
    });

    app.get('/count', (_, res: Response) => {
        const total = count();

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({total}));
        return;
    });

    app.post('/upload', (req: Request, res: Response) => {
        try {
            if (!req.files) {
                res.send({
                    status: false,
                    message: "No Files Uploaded!"
                });
                return;
            }
            
            const files = req.files;
            console.log(files);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    return app;
}