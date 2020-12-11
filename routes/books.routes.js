const express = require('express');
const pruebaController = requiere('../controllers/books.Controller');

const router = express.Router();

router.get('/', booksController.getbooks);
//router.get('/add', booksController.addbooks);
//router.post('/add', booksController.addbooks);
//router.put('/add', booksController.addbooks);
//router.delete('/delate', booksController.addbooks);

module.exports = router;

// import { Router } from "express";
// import { booksController } from "../controllers/books.controller";

// class BooksRoutes {
//     public router: Router = Router();

//     constructor() {
//         this.router.get("/", booksController.getBooks);
//         this.router.post("/", booksController.postBooks);
//         this.router.delete("/:id", booksController.deleteBooks);
//         this.router.put("/:id", booksController.updateBooks);
//     }
// }

// export const booksRoutes = new BooksRoutes(); 