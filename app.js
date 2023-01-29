const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const rateLimit = require('express-rate-limit')
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs:5 * 60 * 1000,
  max:30
})
app.use(limiter)
app.set('trust proxy', 1)
app.use("/",userRoutes);
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(process.env.PORT,function(){
  console.log("server is listening");
  console.log("server has started");
});

module.exports = app;
