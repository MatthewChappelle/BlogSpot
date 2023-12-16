const express = require('express');
const Project = require('../../models/Project'); // Adjust the path as needed

const router = express.Router();

// Define a route for displaying blog details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the blog details
    const project = await Project.findByPk(id);
    console.log(project);

    if (project) {
      res.render('project-details', { project });
    } else {
      res.status(404).json({ error: 'blog not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
