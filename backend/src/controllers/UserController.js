const chatroomService = require("../services/ChatroomService");
const userService = require("../services/UserService");

module.exports = {
    getName: async (req, res) => {
        const email = req.params.email;
        const name = await userService.getUser(email);
        res.send(name);
    },

    signin: async (req, res) => {
        console.log("UserController.signin() executing");
        const email = req.body.email;
        const name = req.body.name;
        console.log(email);
        console.log(name);
        const userExists = await userService.getUserExists(email);
        console.log("userExists=" + userExists);
        if(! userExists) { // if user is not in database
            const user = {
                "email": email,
                "name": name
            }

            await userService.addUser(user);
            // generate user's private chatroom
            const chatroomID = await chatroomService.generateChatroomID(email, email);
            await userService.addChatroomID(email, chatroomID);
            await chatroomService.addChatroomID(chatroomID);
        }

        // get all info user needs
        // 1. list of chatroom IDs user is in
        const chatRoomIDs = await userService.getChatRoomIDs(email);
        res.send(chatRoomIDs);
    }
};
