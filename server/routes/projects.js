// server/routes/projects.js

const router = require('express').Router();
let Project = require('../models/project.model'); // Import the Project model

// --- Route 1: Get All Projects ---
// Handles HTTP GET requests to /api/projects/
router.route('/').get((req, res) => {
  Project.find() // Mongoose method to get all Projects from the DB
    .then(projects => res.json(projects)) // Return the projects as JSON
    .catch(err => res.status(400).json('Error: ' + err)); // Catch errors
});

// --- Route 2: Add a New Project ---
// Handles HTTP POST requests to /api/projects/add
router.route('/add').post((req, res) => {
  // Get the project details from the request's body
  const { title, description, imageUrl, githubLink, liveLink } = req.body;

  // Create a new Project instance
  const newProject = new Project({
    title,
    description,
    imageUrl,
    githubLink,
    liveLink,
  });

  // Save the new project to the database
  newProject.save()
    .then(() => res.json('Project added!')) // Return a success message
    .catch(err => res.status(400).json('Error: ' + err)); // Catch errors
});

module.exports = router;