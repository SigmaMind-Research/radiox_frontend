const express = require("express");
const app = express();
const userRoutes = require("./routes/user");

app.use("/",userRoutes);
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.listen(3000,function(){
  console.log("server is listening");
});
