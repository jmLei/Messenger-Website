const userService = require("../services/UserService");

module.exports = {
    post : (req, res) => {
        console.log("UserController.post executing");
        console.log(req.body);
        userService.addUser(req.body);
        res.sendStatus(200);
    },
};