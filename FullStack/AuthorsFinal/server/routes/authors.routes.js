const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.post('/api/createNewAuthor', AuthorController.createAuthor);
    app.get('/api/getAllAuthors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.getSingleAuthorById);
    app.put('/api/authors/edit/:id', AuthorController.editAuthorById);
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);

}