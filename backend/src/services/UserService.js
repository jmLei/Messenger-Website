const client = require("../redis");

module.exports = {
    addChatroom: async (userid, chatroomid) => {
        const key = userid + "_chatroomIDs";
        console.log(key);
        console.log(chatroomid);
        await client.LPUSH(key, chatroomid);
    },

    createUser: async(payload) => {
        console.log("UserController.addUser");
        const key = payload["sub"];
        await client.HSET(key, "given_name", payload["given_name"]);
        await client.HSET(key, "family_name", payload["family_name"]);
    },

    getChatroomIDs: async (userid) => {
        const key = `${userid}_chatroomIDs`;
        return await client.LRANGE(key, 0, -1);
    },

    getMessageHistory: async (chatroomID) => {
        const messageHistory = await client.LRANGE(chatroomID, 0, -1);
        return messageHistory;
    },

    getUser: async(userid) => {
        const given_name = await client.HGET(userid, "given_name");
        const family_name = await client.HGET(userid, "family_name");
        const name = [ given_name, family_name ];
        return name;
    },

    userExists: async (userid) => {
        return client.EXISTS(userid);
    }
}
