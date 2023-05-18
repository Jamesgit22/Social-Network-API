const router = require('express').Router();
const { User } = require('../../models');

// Get : All users
router.get('/all-users', async (req, res) => {
  try {
    const results = await User.find({});
    res.status(200).json(results);
  } catch (err) {
    console.log('Something broke attempting to get all users. Error: ' + err);
    res.status(500).json({
      message:
        'Something Broke while trying to retrive all users from the database.',
    });
  }
});

// Get : A single user by _id and populate the users associated thoughts and friends.
router.get('/find-user/:id', async (req, res) => {
  try {
    const results = await User.findById(req.params.id)
      .populate('friends')
      .populate('thoughts');
    if (!results) {
      res.status(404).json({
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
router.post('/create-user', async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      res
        .status(400)
        .json({ message: 'Please ensure to enter a valid username and email' });
    }
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
    });
    res.status(200).json(newUser);
  } catch (err) {
    console.log('Error in creating a new user' + err);
    res
      .status(500)
      .json({ message: 'Error in creating a new user. Please try again.' });
  }
});

// Put : Update a user by its _id.
router.put('/update-user/:id', async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      { friends: req.body.friends },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log('Error in updating a user in the database. Error: ' + err);
    res.status(500).json({ message: 'Unable to update the user in the database.' });
  }
});

// Del : Delete a user by its _id. (BONUS: Also delete the users associated thoughts when user is deleted.)
