const https = require("https");

const request_get = (req,res) => {
  res.render("../views/login_signup.ejs");
}

const request_post = (req,res) => {
  const tokenId = "c326a601aa3d0bcee68a8a58b762c0749c77c550b3817efcbf639b71f1db0bd8";
  const url = "https://gorest.co.in/public/v2/users?access-token= " + tokenId + "";
  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      const userData = JSON.parse(data);
      console.log(userData);
    });
  });
  res.render("../views/home");
}

module.exports = {
  request_get,
  request_post,
};
