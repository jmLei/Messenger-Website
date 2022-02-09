const mongoose = require('mongoose');

const chatroomSchema = mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String,
    messageHistory: []
});

module.exports = mongoose.model('Chatroom', chatroomSchema);