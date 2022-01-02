const chatroomService = require("../services/ChatroomService");
const userService = require("../services/UserService");

module.exports = {
	sendMessage: async (req, res) => {
		const chatroomID = req.body.chatroomID;
		const message = req.body.message;
		
		await chatroomService.addMessage(chatroomID, message);
		res.sendStatus(200);
	},
    createChatroom: async (req, res) => {
        const email1 = req.body.email1;
        const email2 = req.body.email2;
        const chatroomID = await chatroomService.generateChatroomID(email1, email2);
        const chatroomExists = await chatroomService.validateChatroomID(chatroomID);

        if(! chatroomExists) {
            console.log("Creating chatroom.");
            await chatroomService.addChatroomID(chatroomID);
            await userService.addChatroomID(email1, chatroomID);
            await userService.addChatroomID(email2, chatroomID);
        } else {
            console.log("Chatroom already exists.");
        }
        res.sendStatus(200);
    },
};
