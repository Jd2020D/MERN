const { Product } = require('../models/product.model');

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(allProducts => response.json(allProducts))
        .catch(err => response.json(err));
}
module.exports.getSingleProductById=(request, response) => {
    Product.findOne({_id:request.params.id})
        .then(allProducts => response.json(allProducts))
        .catch(err => response.json(err));
}
module.exports.editProductById=(request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err));
}
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
