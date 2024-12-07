import { Response, Request } from "express";
import {prisma} from '../database';

export const getBooks = async (req: any, res: any) => {
    const books = await prisma.books.findMany();

    res.json(books);
}


export const addBooks = async (req: any, res: any) => {
       res.json({name: req.body.name});
}