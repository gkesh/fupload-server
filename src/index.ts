import express, { Application } from 'express';
import router from './router';

const app: Application = router(express());
const PORT = 8081;

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`FUpload server started at: localhost:${PORT}`);
});