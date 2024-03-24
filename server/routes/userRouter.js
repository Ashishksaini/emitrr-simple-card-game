const express = require("express");
const authController = require("../controllers/authController.js")
const userController = require("../controllers/userController.js");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login",authController.isLoggedIn, authController.login);
router.get("/logout", authController.logout);


router.get("/", authController.protect,userController.getAllUsers);

router.patch("/update", authController.protect,userController.updateMe);

module.exports = router;

