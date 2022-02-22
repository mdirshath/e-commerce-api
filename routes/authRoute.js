const express = require("express");
const router = express.Router();

const {
	register,
	login,
	verifyUser,
	forgotPassword,
	resetPassword,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/verify-user", verifyUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
