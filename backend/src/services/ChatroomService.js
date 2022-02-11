const mongoose = require('mongoose');
const Chatroom = require('../models/chatroom');

module.exports = {
    createChatroom: () => {
        const chatroom = new Chatroom({
            '_id': mongoose.Types.ObjectId(),
            'name': '',
            'messageHistory': []
        });

        chatroom.save().catch(error => {
            console.log(error);
        });

        return chatroom;
    }
};