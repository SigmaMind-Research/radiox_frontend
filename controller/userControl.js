const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const {axiosIns} = require('./axiosIns')
// const {headers} = require('./headers')

const app = express();
// app.use(headers);
app.disable('x-powered-by')
app.use(express.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

let name;
let email;
let gen;

const request_get = (req,res) => {
  res.render("login_signup")
};

const signup_post = function(req,res) {

  name = req.body.IDname;
  email = req.body.email;
  gen = req.body.gender;
  axiosIns.post("https://gorest.co.in/public/v2/users",{
      name : name,
      email : email,
      gender : gen,
      status : 'active'})
  .then(({data}) => {
    console.log(200)
    console.log(data)
    res.status(200).render("home",{name:name})
  })
  .catch((error) => {
    console.log(error.response.status)
    console.log(error.response.data)
    res.status(500).json({
      error: "something went wrong... check if email is unique"
    })
  })
}

const signin_post = (req,res) => {
  // axiosIns.get("/")
  // .then(function(data){
  //     console.log(data.data)
  //   })
  //   .catch((error) => {
  //       console.log(error)
  //       res.json({
  //           error: 'error',
  //           debug: error.toJSON()
  //         })
  //       })

  res.render("../views/home");
}

module.exports = {
  request_get,
  signup_post,
  signin_post
};





// to get data from server gorest--------------
// axiosIns.get("/")
// .then(function(data){
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
//   res.json({
//     error: 'error',
//     debug: error.toJSON()
//   })
// })


// -------------axios post--------------------
// const url = "https://gorest.co.in/public/v2/users";
//
// await axios.post(url,
//   {
//       email : "gandmra@gmail.com",
//       name : name,
//       gender : 'male',
//       status : 'active'
//   }
// )
// .then(function (response) {
//   response.statusCode();
// })
// .catch(function (error) {
//   console.log(error.response.status);
// });
