const  axios = require('axios')
require('dotenv').config()

const axiosInstance = axios.create({
  baseURL : process.env.API_BASE_URL,
  headers : {
    'Content-type' : 'application/json',
    'accept' : 'application/json',
    'Authorization':process.env.API_KEY_VALUE
  },
  credentials : true
})

module.exports = {
  axiosIns: axiosInstance
}
