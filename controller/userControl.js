const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const {axiosIns} = require('./axiosIns');
const logger = require('./logger');
const { parse } = require('dotenv');
require('dotenv').config()


const app = express();


app.disable('x-powered-by')
app.use(express.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

let name;
let email;
let gen;

const request_get = (req,res) => {
  res.render("login_signup")
  logger.log("info","home page");
};

const signup_post = function(req,res) {

  name = req.body.IDname;
  email = req.body.email;
  gen = req.body.gender;
  axiosIns.post(process.env.API_BASE_URL,{
      name : name,
      email : email,
      gender : gen,
      status : 'active'})
  .then(({data}) => {
    logger.log("info",data)
    res.status(200).render("home",{name:name})
    logger.log("info","data saved")
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
  res.render("../views/home");
}

module.exports = {
  request_get,
  signup_post,
  signin_post
};
