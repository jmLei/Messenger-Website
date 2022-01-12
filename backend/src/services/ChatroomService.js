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
        // if chatroomID exists in the set chatroomIDs, return true
        // else, return false
        return client.EXISTS(chatroomID);
	},

    getChatroomIDs: async () => {
        const chatroomIDs = await client.SMEMBERS(chatroomIDs); 
        return chatroomIDs;
    }
};
