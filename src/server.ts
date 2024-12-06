import express, { Request, Response} from 'express';
import {prisma} from './database';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/books', async (req: Request, res: Response) =>{
    const books = await  prisma.books.findMany();
    res.json({books: books});
});
app.post('/books', async (req: Request, res: Response) =>{
      const book = await prisma.books.create({
        data:{
            name: 'Tecnologia PHP',
            description: 'Livro Tecnologia PHP'
        }
      })
    res.json(book);
});

app.listen(port, () => console.log(`Server http://localhost:${port}`));