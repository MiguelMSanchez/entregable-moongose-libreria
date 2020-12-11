const express = require('express');
const pruebaController = requiere('../controllers/authors.Controller');

const router = express.Router();

router.get('/', authorsController.getAuthors);
router.get('/add', authorsController.addAuthors);
router.post('/add', authorsController.addAuthors);
router.put('/add', authorsController.addAuthors);
router.delete('/delate', authorsController.addAuthors);

module.exports = router;

