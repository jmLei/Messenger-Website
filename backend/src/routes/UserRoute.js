const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/:email", userController.get);
router.post("/", userController.post);


module.exports = router;