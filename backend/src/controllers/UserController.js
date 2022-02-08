const chatroomService = require("../services/ChatroomService");
const userService = require("../services/UserService");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {
    test: async (req, res) => {
        console.log("test");
        const id = req.params.id;
        const givenName = await userService.getGivenName(id);
        res.send(givenName);
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
            console.log(payload);

            const id = payload["sub"];
            const givenName = payload["given_name"];
            const familyName = payload["family_name"];

            if(await userService.exists(id)) {
                console.log("User already exists.");
            } else {
                await userService.createUser(id, givenName, familyName);
            }

        };
        verify().then(() => {
            res.cookie("session-token", token);
            res.send("success");
        }).catch(console.error);
    },
}
