// server/models/message.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  email: { 
    type: String, 
    required: true,
    trim: true
  },
  message: { 
    type: String, 
    required: true 
  },
}, {
  timestamps: true, // Adds 'createdAt' and 'updatedAt'
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;