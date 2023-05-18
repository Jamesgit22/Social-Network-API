const router = require('express').Router();
const { User } = require('../../models');

// Get : All users
router.get('/all-users', async (req, res) => {
  try {
    const results = await User.find({});
    res.status(200).json(results);
  } catch (err) {
    console.log('Something broke attempting to get all users. Error: ' + err);
    res.status(500).json({ message: 'Something Broke while trying to retrive all users from the database.'});
  }
});

// Get : A single user by _id and populate the users associated thoughts and friends.
router.get('/find/:id', async (req, res) => {
  try {
    const results = await User.findById(req.params.id)
      .populate('friends')
      .populate('thoughts');
    if (!results) {
      res
        .status(404)
        .json({
          message: 'Unable to locate a user by that _id. Please try again.',
        });
    } else {
      res.status(200).json(results);
    }
  } catch (err) {
    console.log(
      'Something broke attempting to find a user by _id. Error: ' + err
    );
    res
      .status(500)
      .json('Something broke attempting to find a user by _id. Error: ' + err);
  }
});

// Post: Create a new user.

// Put : Update a user by its _id.

// Del : Delete a user by its _id. (BONUS: Also delete the users associated thoughts when user is deleted.)
