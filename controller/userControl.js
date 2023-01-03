const request_get = (req,res) => {
  res.render("../views/login_signup.ejs");
}

const request_post = (req,res) => {
  res.render("../views/home.ejs");
}

module.exports = {
  request_get,
  request_post,
};
