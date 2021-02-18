const UserController = require('../controllers/user.controller');
const BookController = require('../controllers/book.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app){
    app.post("/api/register", UserController.register);
    app.post("/api/country", UserController.createCountry);
    app.post("/api/user/:id/addFavBook",authenticate, UserController.addFavBook);
    app.post("/api/user/:id/removeFavBook",authenticate, UserController.removeFavBook);
    app.post("/api/login", UserController.login);
    
    app.get("/api/user/",authenticate, UserController.getSingleUserById);
    app.get("/api/logout", UserController.logout);
    app.get("/api/books",authenticate, BookController.allBooks);
    app.get("/api/countries", UserController.allCountries);

    // app.post('/api/createNewUser', UserController.createUser);
    // app.get('/api/getAllUsers', UserController.findAllUsers);
    // app.get('/api/users/:id', UserController.getSingleUserById);
    // app.put('/api/users/edit/:id', UserController.editUserById);
    // app.delete('/api/Users/delete/:id', UserController.deleteUser);

}