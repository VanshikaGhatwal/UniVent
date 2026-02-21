const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;

const protect = require('../middleware/authMiddleware');

router.get('/profile', protect, (req, res) => {
  res.json(req.user);
});