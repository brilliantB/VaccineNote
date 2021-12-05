var express = require("express");
var router = express.Router();
var authRouter = require("./auth/index");
var postRouter = require("./post/index");

router.use("/auth", authRouter);
router.use("/post", postRouter);
module.exports = router;
