import { Application } from 'express';

export default (app: Application): Application => {
    app.get('/', (_, __) => {
        // tslint:disable-next-line:no-console
        console.log("FUpload Server is currently live...");
    });

    return app;
}