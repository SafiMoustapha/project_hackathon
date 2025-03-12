const express = require("express");
const { register, login, uploadProof } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/upload-proof", protect, uploadProof);

module.exports = router;
