const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/signout", userController.signout);
router.post("/signin", userController.signin);

module.exports = router;
