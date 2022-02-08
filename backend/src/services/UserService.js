const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
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
     * Returns whether consumed id exists in the database.
     * @param {*} id = a user's id
     */
    exists: async(id) => {
        return await User.findOne( { _id: id} );
    },

    getFamilyName: async (id) => {
        return await User.findById( { _id: id }, {familyName: 1} );
    },

    getGivenName: async (id) => {
        return await User.findById( { _id: id }, { givenName: 1 } );
    },
}
