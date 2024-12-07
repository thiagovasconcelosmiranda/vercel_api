import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './router';

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => console.log(`Server http://localhost:${port}`));