const  axios = require('axios')

const axiosInstance = axios.create({
  baseURL : "https://gorest.co.in/public/v2/users",
  headers : {
    'Content-type' : 'application/json',
    'accept' : 'application/json',
    'Authorization':'Bearer c326a601aa3d0bcee68a8a58b762c0749c77c550b3817efcbf639b71f1db0bd8'
  },
  credentials : true
})

module.exports = {
  axiosIns: axiosInstance
}
