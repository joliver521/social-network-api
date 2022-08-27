const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

// Set up get all and post methods on /api/thoughts
router.route('/').get(getAllThought).post(createThought);

// setting up get one, put, and delete methods on /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// setting up post reaction method on /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// setting up delete reaction method on /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
