const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    givenName: String,
    familyName: String,
    chatroomIDs: [],
    incomingChatRequests: [],
    outgoingChatRequests: []
});

module.exports = mongoose.model('User', userSchema);