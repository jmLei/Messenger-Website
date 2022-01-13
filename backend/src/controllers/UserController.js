const chatroomService = require("../services/ChatroomService");
const userService = require("../services/UserService");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

const getChatroom = async (chatroomID, userid) => {
    const participants = chatroomID.split("_");
    let name = (participants[0] === userid) ? participants[1] : participants[0];
    name = await userService.getUser(name);
    const avatar = name[0].charAt(0) + name[1].charAt(0);
    const lastMessageID = await chatroomService.getLastMessageID(chatroomID);
    const lastMessage = await chatroomService.getMessage(lastMessageID);

    const chatroom = {
        avatar: avatar,
        chatroomID: chatroomID,
        lastMessage: lastMessage,
        name: name
    };
    return chatroom;
};

module.exports = {
    getChatrooms: async (req, res) => {
        const userid = req.params.userid;
        const chatroomIDs = await chatroomService.getChatroomIDs(userid);
        const chatrooms = [];
        
        for(chatroomID of chatroomIDs) {
            const chatroom = await getChatroom(chatroomID, userid);
            chatrooms.push(chatroom);
        }

        res.send(chatrooms);
    },

    signin: (req, res) => {
        const token = req.body.token;

        const verify = async () => {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.CLIENT_ID
            }).catch((error) => {
                console.log(error);
            });

            const payload = ticket.getPayload();
            const userid = payload["sub"];
            const userExists = await userService.userExists(userid);
            if(! userExists) {
                await userService.addUser(payload);
                const chatroomID = await chatroomService.addChatroomID(userid, userid);
                await userService.addChatroom(userid, chatroomID);

            } else {
                console.log("User already exists.");
            }
        };

        verify().then(() => {
            res.cookie("session-token", token);
            res.send("success");
        }).catch(console.error);
    },
}
