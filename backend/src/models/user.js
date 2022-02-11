const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    givenName: String,
    familyName: String,
    chatroomIDs: [ mongoose.ObjectId ],
    incomingChatRequests: [ mongoose.ObjectId ],
    outgoingChatRequests: [ mongoose.ObjectId ]
});

userSchema.index({ givenName: 'text', familyName: 'text' });

module.exports = mongoose.model('User', userSchema);