const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    name: {
      type: String,
    },
    code: {
      type: String,
    }

  }, {timestamps: true});
module.exports.CountrySchema=CountrySchema;
module.exports.Country = mongoose.model("Country", CountrySchema);
