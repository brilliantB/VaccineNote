var express = require("express");
var router = express.Router();
var postController = require("../../../controllers/vaccine/postController");
const authModule = require("../../../modules/authModule");

router.get("/", postController.getAllDate);
router.post("/upload", authModule.loggedIn, postController.uploadPost);
router.delete("/delete/:id", authModule.loggedIn, postController.deletePost);
router.put("/update/:id", authModule.loggedIn, postController.updatePost);
router.get("/:id", authModule.loggedIn, postController.detailPost);

module.exports = router;
