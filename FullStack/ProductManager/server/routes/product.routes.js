const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/create', ProductController.createProduct);
}