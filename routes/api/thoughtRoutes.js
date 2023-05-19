const router = require('express').Router();
const { Thought, Reaction, User } = require('../../models');
const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtsController');

// Get : To get all thoughts.
router.route('/all-thoughts').get(getAllThoughts);

// Get : To get a single thought by _id.
router.route('/thought/:id').get(getOneThought);

// Post : To create a new thought. Ensure to push the new thoughts _id field to the associated users thought array.
router.route('/create-thought/:id').post(createThought);

// Put : update a thought by _id.
router.route('/update-thought/:id').put(updateThought);

// Delete : Delete a thought by _id.
router.route('/delete-thought/:id').delete(deleteThought);

// Post to create a reaction to a thought
router.route('/thoughts/:id/reactions').post(createReaction);

module.exports = router;
