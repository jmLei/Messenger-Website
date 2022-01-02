const client = require ("../redis");

module.exports = {
    addChatroomID : async (chatroomID) => {
        client.sAdd("chatroomIDs", chatroomID);
    },

    generateChatroomID : async (email1, email2) => {
        const chatroomID = (email1 < email2) ?
            email1 + "_" + email2 :
            email2 + "_" + email1;
        return chatroomID;
    },

    validateChatroomID : async (chatroomID) => {
        // if chatroomID exists in the set chatroomIDs, return true
        // else, return false
        return (client.SISMEMBER("chatroomIDs", chatroomID));
    }
};