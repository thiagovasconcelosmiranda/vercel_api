import { Response, Request } from "express";
import {prisma} from '../database';

export const getBooks = async (req: Request, res: Response) => {
    const books = await prisma.books.findMany();

    res.json(books);
}


export const addBooks = async (req: Request, res: Response) => {
       res.json({});
}