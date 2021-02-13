const { Author } = require('../models/author.model');

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}
module.exports.findAllAuthors = (request, response) => {
    Author.find({})
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json(err));
}
module.exports.getSingleAuthorById=(request, response) => {
    Author.findOne({_id:request.params.id})
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.status(404).json({errors:{notFound:{message:"We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"}}}));
}
module.exports.editAuthorById=(request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true })
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err));
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
