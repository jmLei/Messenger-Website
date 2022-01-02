const express = require("express");
const router = express.Router();

const chatroomController = require("./src/controllers/ChatroomController");
router.post("/", chatroomController.createChatroom);

module.exports = router;
