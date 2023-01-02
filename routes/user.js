const express = require("express");
const router = express.Router();
const controller = require("../controller/userControl");

router.get("/",controller.request_get);

router.post("/home", controller.request_post);

module.exports = router;
