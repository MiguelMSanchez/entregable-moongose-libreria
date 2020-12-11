const { MongooseDocument } = require('mongoose');
const authorsModel = require('../models/authors.Model')
const mongoose = require(mongoose);


mongoose.connect();

module.exports = {
    getBooks: async function (req, res) {
        const authorsList = await Books.find();
        console.log('respuesta de la BBDD', booksList);

        console.log('obtener autores');

        res.json(booksList);
    },

    updateBooks: async function (req, res) {
        const newAuthor = req.body;

    },

    addBooks: async function(req, res) {
        const listaAuthors = [];

        for (author of listadoAuthors) {
            const authorToAdd = new Author();

            authorToAdd.nombre = 'Prueba';
            authorToAdd.contenido = 20 ;

            await booksToAdd.save();
        }

        res.send('Autor añadido')
    },

    deleteBooks: async function(req, res){

    },
};
