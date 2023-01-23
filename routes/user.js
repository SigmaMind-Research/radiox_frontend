const express = require("express");
const router = express.Router();
const controller = require("../controller/userControl");

router.get("/",controller.request_get);

router.post("/signin", controller.signin_post);

router.post("/signup", controller.signup_post);

module.exports = router;
