const PORT = process.env.PORT || 5000;
const mongoose = require ("mongoose");
const express = require('express');
const app = express();
const {MONGOURI} = require ("./config/keys");
const User = require('./model/user');
app.use(express.json());
app.use(require('./router/auth'));
require("dotenv").config();

mongoose.connect  (MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("conneted to mongo");
  });
  mongoose.connection.on("error", (err) => {
    console.log("ERROR IN CONNECTING \n", err);
  });



app.get('/',(req,res) => {
    res.send('HelloWorld From the Server');
});
app.get('/Login',(req,res) => {
    res.send('HelloWorld From the Login');
});
app.get('/Signup',(req,res) => {
    res.send('HelloWorld From the Signup');
});
app.get('/Cart',(req,res) => {
    res.send('HelloWorld From the Cart');
});
// console.log("Om Vipulbhai Patel");

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
