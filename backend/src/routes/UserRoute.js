const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/test/:id", userController.test);
router.post("/signin", userController.signin);

module.exports = router;
