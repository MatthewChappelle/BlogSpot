const express = require('express');
const Project = require('../../models/Project'); // Adjust the path as needed

const router = express.Router();

// Define a route for displaying recipe details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the recipe details, including its rating
    const recipe = await Project.findByPk(id);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
