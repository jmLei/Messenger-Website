const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id: mongoose.ObjectId,
    text: String
}, { timestamps: true } );

module.exports = mongoose.model('Message', messageSchema);