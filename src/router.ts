import { Router } from "express";
import * as bookController from './controllers/book';

export const router = Router();

router.get('/books', bookController.getBooks);
router.post('/books', bookController.addBooks);
