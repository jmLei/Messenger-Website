const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    givenName: String,
    familyName: String,
    chatroomIDs: [],
    incomingChatRequests: [],
    outgoingChatRequests: []
});

userSchema.index( { givenName: 'text', familyName: 'text' } );

module.exports = mongoose.model('User', userSchema);