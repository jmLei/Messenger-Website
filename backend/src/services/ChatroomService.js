const client = require("../redis");

module.exports = {
    createChatroomID: async (userID, otherUserID) => {
        const chatroomID = (userID > otherUserID) ?
            `${otherUserID}_${userID}` :
            `${userID}_${otherUserID}`;
        return chatroomID;
    },
    getMessageHistory: async (chatroomID) => {
        const messageHistory = await client.LRANGE(chatroomID, 0, -1);
        return messageHistory;
    },
};