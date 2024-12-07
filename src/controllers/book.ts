import { prisma } from '../database';

export const getBooks = async (req: any, res: any) => {
    const books = await prisma.books.findMany();
    res.json(books);
}


export const addBooks = async (req: any, res: any) => {
    const { name, description } = req.body;
    res.json(description)

    const book = await prisma.books.create({
        data: {
            name: name,
            description: description
        }
    });
    res.json(book);
}