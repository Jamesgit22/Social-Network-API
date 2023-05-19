const router = require('express').Router();
const { User, Thought } = require('../../models');
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUsername,
  addFriend,
  deleteUser,
} = require('../../controllers/usersController');

// Get : All users
router.route('/all-users').get(getAllUsers);

// Get : A single user by _id and populate the users associated thoughts and friends.
router.route('/find-user/:id').get(getOneUser);

// Post: Create a new user.
router.route('/create-user').post(createUser);

// Put : Update Username by _id.
router.route('/update-user/:id').put(updateUsername);

// Put : Add Friend by its _id.
router.route('/:id/friends').post(addFriend);

// Del : Delete a user by its _id. (BONUS: Also delete the users associated thoughts when user is deleted.)
router.route('/delete-user/:id').delete(deleteUser);

module.exports = router;
