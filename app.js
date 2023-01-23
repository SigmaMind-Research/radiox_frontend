const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.post("/signin",function(req,res){
//
//
// })

app.use("/",userRoutes);
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(port,function(){
  console.log("server is listening");
  console.log("server has started");
});

module.exports = app;
