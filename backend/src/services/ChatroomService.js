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
    },

    getChatrooms: async (chatroomIDs) => {
        const chatrooms = [];
        for(let i = 0; i < chatroomIDs.length; i++) {
            const chatroom = await Chatroom.findOne( { '_id': `${chatroomIDs[i]}` });
            chatrooms.push(chatroom);
        }
        return chatrooms;
    }
};