const jwt=require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
// connection
const {MONGOURI} = require ("../config/keys");
// require('../config/keys');
const User=require('../model/user');
router.get('/', (req,res) => {
    res.send('HelloWorld From the Server router js');
});

router.post('/register', async (req,res) => {
    const  { email , password , address, city, state, zip } = req.body;
 if (!email || !password || !address || !city || !state || !zip ) {
    return res.status(422).json({error:"plz fill the all detail properly"});
 }
try{
   const userExist = await  User.findOne({email:email});
   if(userExist) {
    return res.status(422).json({error:"email already exist"});
}
const user = new User({email , password , address, city, state, zip});
 const userRegister = await user.save();
 res.status(201).json({message:"user registered succesfulllll"});
 
 }
    catch(err){ 
         console.log(err);

    }
 
});
// login route
router.post('/login', async (req,res) =>{
    try{
        const {email,password} =req.body;
        if(!email || !password ){
            return res.status(400).json({eroor:"plz fill the data correctly"})
        }
       const userLogin = await User.findOne({email:email});
      
        if(userLogin){
            bcrypt
            .compare(password,userLogin.password)
            .then((doMatch) => {
              if (doMatch) {
               
                const token = jwt.sign({ _id: userLogin._id }, JWT_KEY);
                const { _id,  email, password } = userLogin;
                res.json({
                  token,
                  user: { _id, firstName, lastName, email, password },
                });
              } else {
                return res.status(422).json({ error: "Invalid Email or password" });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }else{
            res.status(400).json({message:"inavlid (all) crendientials "});
        }

      }
         catch(err){ 
              console.log(err);
         }
    
})
module.exports = router;