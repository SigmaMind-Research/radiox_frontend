const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.post("/signin",function(req,res){
//
//
// })

app.use("/",userRoutes);
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(process.env.PORT,function(){
  console.log("server is listening");
  console.log("server has started");
});

module.exports = app;
