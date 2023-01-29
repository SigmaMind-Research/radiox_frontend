const express = require("express");
const router = express.Router();
const controller = require("../controller/userControl");
const axiosIns = require("../controller/axiosIns");
router.get("/",controller.request_get);

router.post("/signin", controller.signin_post);

router.post("/signup",axiosIns.redis_post,controller.signup_post);

module.exports = router;
