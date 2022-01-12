const client = require("../redis");

module.exports = {
    addChatroom: async (userid, chatroomid) => {
        const key = userid + "_chatroomIDs";
        console.log(key);
        console.log(chatroomid);
        await client.LPUSH(key, chatroomid);
    },

    addUser: async(payload) => {
        console.log("UserController.addUser");
        const key = payload["sub"];
        await client.HSET(key, "given_name", payload["given_name"]);
        await client.HSET(key, "family_name", payload["family_name"]);
    },

    userExists: async (userid) => {
        return client.EXISTS(userid);
    }
}
