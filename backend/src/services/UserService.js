const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    /**
     * Adds a chatroom ID to a user's list of chatroom IDs.
     * @param {*} id = a user's ID
     * @param {*} chatroomID = a chatroom's ID
     */
    addChatroomID: async (id, chatroomID) => {
        User.update( 
            {
                "_id": id
            },
            {
                "$push": {
                    "chatroomIDs": chatroomID
                }
            }
        );
    },

    /**
     * Adds a user ID to a user's list of incoming friend requests.
     * @param {*} id = a user's ID
     * @param {*} otherID = the incoming chat request
     */
    addIncomingChatRequest: async (id, otherID) => {
        await User.update( { _id: id }, { $push: { incomingChatRequests: otherID } }, done );
    },

    /**
     * Adds a user ID to a user's list of outgoing friend requests.
     * @param {*} id = a user's ID
     * @param {*} otherID = the outgoing chat request
     */
    addIncomingChatRequest: async (id, otherID) => {
        await User.update( { _id: id }, { $push: { outgoingChatRequests: otherID } }, done );
    },

    /**
     * Inserts a user into the database.
     * @param id = the user's id 
     * @param givenName = the user's first name
     * @param familyName = the user's last name
     */
    createUser: async(id, givenName, familyName) => {
        const user = new User({
            "_id": id,
            "givenName": givenName,
            "familyName": familyName,
            "chatroomIDs": [],
            "incomingChatRequests": [],
            "outgoingChatRequests": []
        });
        user.save().then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    },

    /**
     * Consumes a user ID, and returns whether the user ID already exists in the database.
     * @param {*} id = a user's id
     * @returns if a user with the given ID exists.
     */
    exists: async(id) => {
        return await User.findOne( { _id: id} );
    },

    /**
     * Consumes a user ID, and returns a list of chatrooms the user with the user ID has permission to access.
     * @param {*} id = a user's id
     * @returns a list of chatroom IDs
     */
    getChatroomIDs: async (id) => {
        return await User.findOne( { _id: id }, { chatroomIDs: 1 } );
    },

    /**
     * Consumes a user ID, and returns a list of incoming chat requests the user with the user ID has.
     * @param {*} id = a user's id
     * @returns a list of incoming chat requests
     */
    getIncomingChatRequests: async (id) => {
        return await User.findOne( { _id: id }, { incomingChatRequests: 1 } );
    },

    /**
     * Consumes a user ID, and returns a list of outgoing chat requests the user with the user ID has.
     * @param {*} id = a user's id
     * @returns a list of outgoing chat requests
     */
    getOutgoingChatRequests: async (id) => {
        return await User.findOne( { _id: id }, { outgoingChatRequests: 1 } ); 
    },

    /**
     * Returns a user's last name.
     * @param {*} id = a user's id
     * @returns last name of the user associated with the id
     */
    getFamilyName: async (id) => {
        return await User.findById( { _id: id }, {familyName: 1} );
    },

    /**
     * Returns a user's first name.
     * @param {*} id = a user's id
     * @returns first name of the user associated with the id
     */
    getGivenName: async (id) => {
        return await User.findById( { _id: id }, { givenName: 1 } );
    },

    /**
     * Removes a chatroomID from user associated with the id.
     * @param {*} id = a user's id
     * @param {*} chatroomID = a chatroom's id
     */
    removeChatroomID: async (id, chatroomID) => {
        await User.update( { _id: id }, { $pull: { chatroomIDs: chatroomID } }, done );
    },

    /**
     * Removes an incoming chat request from the user associated with the id.
     * @param {*} id = a user's id
     * @param {*} incomingChatRequest = other user's id
     */
    removeIncomingChatRequest: async (id, incomingChatRequest) => {
        await User.update( { _id: id }, { $pull: { incomingChatRequests: incomingChatRequest } } );
    },

    /**
     * Removes an outgoing chat request from the user associated with the id.
     * @param {*} id = a user's id
     * @param {*} outgoingChatRequest = other user's id
     */
    removeOutgoingChatRequest: async (id, outgoingChatRequest) => {
        await User.update( { _id: id }, { $pull: { outgoingChatRequests: outgoingChatRequest } } );
    },

    /**
     * Consumes a name, and returns every user that corresponds with that name.
     * @param {*} name = a user's name
     */
    searchByName: async (name) => {
        return await User.find({ $text: { $search: name } });
    }
}