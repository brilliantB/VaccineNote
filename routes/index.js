var express = require("express");
var router = express.Router();
var vaccineRouter = require("./vaccine/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/vaccine", vaccineRouter);
module.exports = router;
