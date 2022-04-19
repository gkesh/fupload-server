import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { authenticate } from './openmrs/session';

const app = express();
const port = process.env.PORT;

app.get('/', (_, __) => {
    // tslint:disable-next-line:no-console
    console.log("Reportal Started...");

    // tslint:disable-next-line:no-console
    console.log(authenticate());
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at: localhost:${port}`);
});