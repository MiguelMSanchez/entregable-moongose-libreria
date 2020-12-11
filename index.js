import express from "express";


const app = express();


const booksRouter = require('./src/routes/books.routes');

app.set('port', 3000);

//app.use(express.urlencoded({extended: true}));

app.use('/prueba', booksRouter)

app.get('/', (req, res) => {
    res.status(200).send('Llama a la ruta expecifica');
});

app.listen(app.get("port"), () => {
    console.log(`Server running on port ${app.get("port")}`);    
});