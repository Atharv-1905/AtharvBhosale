// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- NEW: MongoDB Connection ---
const uri = process.env.ATLAS_URI; // Get URI from .env file
mongoose.connect(uri); // Start the connection

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully!");
});
// -----------------------------

// --- API ROUTES ---
const projectsRouter = require('./routes/projects'); // <-- ADD THIS LINE
const contactRouter = require('./routes/contact');
app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the server! 👋" });
});

app.use('/api/projects', projectsRouter); // <-- ADD THIS LINE
app.use('/api/contact', contactRouter);
// ------------------

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});