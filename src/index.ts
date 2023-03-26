import express from 'express';

const app = express();
const port = 5005;

app.get('/', (_, __) => {
    // tslint:disable-next-line:no-console
    console.log("Reportal Started...");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at: localhost:${port}`);
});