const userService = require("../services/UserService");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {
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
                userService.addUser(payload);
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
