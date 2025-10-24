// server/models/project.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This is the blueprint for a "Project"
const projectSchema = new Schema({
  title: { 
    type: String, 
    required: true,
    trim: true // trim whitespace
  },
  description: { 
    type: String, 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: false // Not all projects might have an image
  },
  githubLink: { 
    type: String, 
    required: true 
  },
  liveLink: { 
    type: String, 
    required: false // Not all projects might be deployed
  },
}, {
  timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
});

// The "model" is the tool we use to interact with the "projects" collection in the DB
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;