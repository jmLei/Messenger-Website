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
        return await client.EXISTS(chatroomID);
	},

    getChatroomIDs: async (userid) => {
        console.log("ChatroomService.getChatroomIDs()");
        console.log("userid = " + userid);
        const key = userid + "_chatroomIDs";
        const chatroomIDs = await client.LRANGE(key, 0, -1);
        console.log(chatroomIDs);
        return chatroomIDs; 
    }
};
