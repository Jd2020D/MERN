const { User } = require('../models/user.model');
const { Country } = require('../models/country.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

require('dotenv').config();

module.exports.getSingleUserById=(request, response) => {
    User.findOne({_id:jwt.decode(request.cookies.usertoken).id})
        .then(user => response.json(user))
        .catch(err => response.status(404).json({errors:{notFound:{message:"We're sorry, but we could not find the User you are looking for. Would you like to add this User to our database?"}}}));
}

module.exports.createCountry = (request, response) => {
    Country.create(request.body)
        .then(Country => response.json(Country))
        .catch(err => response.status(400).json(err));
}

module.exports.register =  (req, res) => {
    User.create(req.body)
      .then(user => {
        const userToken = jwt.sign({
              id: user._id
          }, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: "success!", user: user });

      })
      .catch(err => res.status(400).json(err));
  }
module.exports.login= async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
     
        if(user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }
     
        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
     
        if(!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }
     
        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
     
        // note that the response object allows chained calls to cookie and json
        res.cookie("usertoken", userToken,  {
                httpOnly: true
            })
            .json({ msg: "success!" });
    }
    module.exports.logout= (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
    
// module.exports.findAllUsers = (request, response) => {
//     User.find({})
//         .then(allUsers => response.json(allUsers))
//         .catch(err => response.json(err));
// }
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
