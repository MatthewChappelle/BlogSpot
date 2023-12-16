const router = require('express').Router();
const { Project } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {

    const newProject = await Project.create({
      title: req.body.blogPost,
      text: req.body.postContent,
      user_id: req.session.user_id,
      user_name: req.session.user_name,
    });

    res.status(200).json(newProject);
  } catch (err) {
    console.log("cannot create project");
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
