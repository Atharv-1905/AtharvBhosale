// server/routes/contact.js

const router = require('express').Router();
let Message = require('../models/message.model'); // Import the Message model

// Handles HTTP POST requests to /api/contact/send
router.route('/send').post((req, res) => {
  // Get the form data from the request body
  const { name, email, message } = req.body;

  // Create a new Message
  const newMessage = new Message({
    name,
    email,
    message,
  });

  // Save the message to the database
  newMessage.save()
    .then(() => res.json('Message sent successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;