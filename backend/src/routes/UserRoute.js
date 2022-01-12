const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/chatroom/:userid", userController.getChatrooms);
router.post("/signin", userController.signin);

module.exports = router;
