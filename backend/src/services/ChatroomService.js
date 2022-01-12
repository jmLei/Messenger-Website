const client = require ("../redis");

module.exports = {
    initChatroom: async (chatroomID) => {

    }, 

    initChatroomID : async (userid, otherUserid) => {
        const chatroomID = (userid < otherUserid) ?
            userid  + "_" + otherUserid :
            otherUserid + "_" + userid;
        return chatroomID;
    },

    chatroomIdExists: async (chatroomID) => {
        // if chatroomID exists in the set chatroomIDs, return true
        // else, return false
        return client.EXISTS(chatroomID);
	}
};
