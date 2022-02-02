const chatroomService = require("../services/ChatroomService");
const userService = require("../services/UserService");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {

    getChatrooms: async (req, res) => {
        const userid = req.params.userid;
        const chatroomIDs = await userService.getChatroomIDs(userid);
        const promises = chatroomIDs.map(async (chatroomID) => {
            const users = chatroomID.split("_");
            const user = (users[0] === userid) ? users[1] : users[0];
            const otherUser = (users[0] === userid) ? users[0] : users[1];
            const username = await userService.getUser(user);
            const otherUsername = await userService.getUser(otherUser);

            const chatroom = {
                chatroomID: chatroomID,
                user: username,
                otherUser: otherUsername,
            };
            return chatroom;
        });

        Promise.all(promises)
        .then(result => res.send(result))
        .catch(error => console.log(error));
    },

    getMessageHistory: async (req, res) => {
        const chatroomID = req.params.chatroomID;
        const messageHistory = await chatroomService
                                .getMessageHistory(chatroomID);
        res.send(messageHistory);
    },

    getName: async (req, res) => {
        const userid = req.params.userid;
        const name = await userService.getUser(userid);
        res.send(name);
    },

    signin: async (req, res) => {
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
                await userService.createUser(payload);
                const chatroomID = await chatroomService.createChatroomID(
                    userid, userid
                )
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
