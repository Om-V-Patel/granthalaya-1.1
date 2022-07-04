// const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  tokens:[
    {
    token:{
            type: String,
            required: true,
            } 
    } 
]

});
// password hashing code
userSchema.pre('save', async function (next)  {
  console.log('hi Patel from inside');
  if (this.isModified('password')) {
    this.password =  await bcrypt.hash(this.password,12);
    // this.password = bcrypt.hash(this.cpassword,12);
  }
  next();
})

// generatinG token

// userSchema.methods.generateAuthToken = async function(){
//   try{
//         let token = jwt.sign({_id:this._id},process.env.JWT_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//   }catch(err){
//         console.log(err);
//         }
// }

const User = mongoose.model("User", userSchema);
module.exports = User;