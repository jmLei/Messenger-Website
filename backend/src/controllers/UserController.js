const userService = require("../services/UserService");

module.exports = {
    signin: async (req, res) => {
        const email = req.body.email;
        const user = await userService.getUser(email);
        if(user === null) { // if user is not in database
            console.log(req.body);
            await userService.addUser(req.body);
        }

        // get all info user needs
        // 1. list of chatroom IDs user is in

        const chatRoomIDs = await userService.getChatRoomIDs(email);
        res.send(chatRoomIDs);
    }
};