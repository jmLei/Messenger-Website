const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/chatrooms/:userid", userController.getChatrooms);
router.get("/chatroom/:chatroomID", userController.getMessageHistory);
router.get("/:userid", userController.getName);
router.post("/signin", userController.signin);

module.exports = router;
