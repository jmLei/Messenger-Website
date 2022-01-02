const express = require("express");
const router = express.Router();

const chatroomController = require("../controllers/ChatroomController");
router.post("/", chatroomController.createChatroom);
router.post("/message", chatroomController.sendMessage);
module.exports = router;
