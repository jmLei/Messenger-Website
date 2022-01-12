const express = require("express");
const router = express.Router();

const chatroomController = require("../controllers/ChatroomController");

router.get("/:chatroomIds", chatroomController.getChatroomTabs);

module.exports = router;
