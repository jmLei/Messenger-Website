const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get('/chatrooms/id=:userID', userController.getChatrooms);
router.get("/name=:name", userController.searchUser);
router.post("/signin", userController.signin);

module.exports = router;
