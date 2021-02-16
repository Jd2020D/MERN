const { Book } = require('../models/book.model');

    
module.exports.allBooks = (request, response) => {
    Book.find({})
        .then(allBooks => response.json(allBooks))
        .catch(err => response.json(err));
}
// module.exports.getSingleUserById=(request, response) => {
//     User.findOne({_id:request.params.id})
//         .then(allUsers => response.json(allUsers))
//         .catch(err => response.status(404).json({errors:{notFound:{message:"We're sorry, but we could not find the User you are looking for. Would you like to add this User to our database?"}}}));
// }
// module.exports.editUserById=(request, response) => {
//     User.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true })
//         .then(updatedUser => response.json(updatedUser))
//         .catch(err => response.status(400).json(err));
// }
// module.exports.deleteUser = (request, response) => {
//     User.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }
