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
            const messageHistory = await userService.getMessageHistory(chatroomID);
            
            const chatroom = {
                chatroomID: chatroomID,
                user: username,
                otherUser: otherUsername,
                messageHistory: messageHistory
            };
            return chatroom;
        });

        Promise.all(promises)
        .then(result => res.send(result))
        .catch(error => console.log(error));

        /*
            key = chatroomID
            value = {
                user: string
                otherUser: string
                messageHistory: list of strings

            }
        */
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
