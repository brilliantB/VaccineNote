var express = require("express");
var router = express.Router();
var authController = require("../../../controllers/vaccine/authController");
const authModule = require("../../../modules/authModule");
const awsUpload = require("../../../modules/awsUpload");

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.delete("/", authModule.loggedIn, authController.deleteUser);
router.put("/update", authModule.loggedIn, authController.updateUser);
router.get("/profile", authModule.loggedIn, authController.getProfile);
router.post("/image", awsUpload.single("img"), (req, res) => {
  const file = req.file;
  console.log(file.location); // 이미지 정보, 로케이션
  return res.status(200).json({
    message: "이미지 업로드 완료",
  });
});
module.exports = router;
