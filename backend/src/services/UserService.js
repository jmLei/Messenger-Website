const client = require("../redis");

module.exports = {

    addChatroomID : async (email, chatroomID) => {
        const key = email + "_chatroom_list";
        client.sAdd(key, chatroomID);
    },

    addUser : async (user) => {
        await client.set(user.email, user.name);
    },

    getChatRoomIDs : async (email) => {
        const key = email + "_chatroom_list";
        const chatRoomIDs = await client.get(key);
        return chatRoomIDs;
    },

    getUser : async (email) => {
        const user = await client.get(email);
        return user;
    },
}