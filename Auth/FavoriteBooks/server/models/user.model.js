const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { BookSchema } = require('./book.model');
const { CountrySchema, Country } = require('./country.model');


const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First name is required"]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    }},
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    },
    books:[BookSchema],
    country:{
      type:{CountrySchema},
      required:true,
    }
  }, {timestamps: true});

  UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

  UserSchema.pre('validate', async function(next) {
    if(this.country.length<=0)
      this.invalidate('country','Country is reqiured');
    else{
      this.country =await Country.findOne({_id:this.country})
      .then(country=>country)
      .catch(err=>false)
      if(!this.country)
        this.invalidate('country','Country is reqiured !!!!')
  
    }
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });
  UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });
  
  
  module.exports.User = mongoose.model("User", UserSchema);
