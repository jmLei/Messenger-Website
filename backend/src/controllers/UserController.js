const chatroomService = require("../services/ChatroomService");
const userService = require("../services/UserService");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {
    getChatrooms: async (req, res) => {
        const userID = req.params.userID;
        const data = await userService.getChatroomIDs(userID);
        const chatroomIDs = data.chatroomIDs;
        const chatrooms = await chatroomService.getChatrooms(chatroomIDs);
        console.log(chatrooms);
        res.send(chatrooms);
    },

    searchUser: async (req, res) => {
        const name = req.params.name;
        const users = await userService.searchByName(name);
        res.send(users);
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
            const id = payload["sub"];
            const givenName = payload["given_name"];
            const familyName = payload["family_name"];

            if(await userService.exists(id)) {
                console.log("User already exists.");
            } else {
                await userService.createUser(id, givenName, familyName);
                const chatroom = await chatroomService.createChatroom();

                await userService.addChatroomID(id, chatroom._id);
                
            }
        };
        verify().then(() => {
            res.cookie("session-token", token);
            res.send("success");
        }).catch(console.error);
    },
}
