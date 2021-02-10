const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/create', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getSingleProductById);
    app.put('/api/products/edit/:id', ProductController.editProductById);
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);

}