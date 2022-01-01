const userService = require("../services/UserService");

module.exports = {
    get : async (req, res) => {
        const email = req.params.email;
        const user = await userService.getUser(email);
        res.send(user);
    },

    post : async (req, res) => {
        await userService.addUser(req.body);
    },
};