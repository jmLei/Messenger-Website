const client = require ("../redis");

module.exports = {
    addChatroomID : async (userid, otherUserid) => {
        const chatroomID = (userid < otherUserid) ?
            userid  + "_" + otherUserid :
            otherUserid + "_" + userid;

        await client.SADD("chatroomIDs", chatroomID);
        return chatroomID;
    },

    chatroomIdExists: async (chatroomID) => {
        return await client.EXISTS(chatroomID);
	},

    getChatroomIDs: async (userid) => {
        const key = userid + "_chatroomIDs";
        const chatroomIDs = await client.LRANGE(key, 0, -1);
        return chatroomIDs; 
    },

    getMessage: async (messageID) => {
        if(messageID === "") return "No messages sent yet.";
        const message = await client.HGETALL(messageID);
        return message;
    },

    getLastMessageID: async (chatroomID) => {
        const key = chatroomID + "_message_history";
        let lastMessageID = await client.LRANGE(key, 0, 1);
        return (lastMessageID.length === 0) ? "" : lastMessageID[0];
    }
};
