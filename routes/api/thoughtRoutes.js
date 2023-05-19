const router = require('express').Router();
const { Thought, Reaction, User } = require('../../models');

// Get : To get all thoughts.
router.get('/all-thoughts', async (req, res) => {
  try {
    const results = await Thought.find({});
    res.status(200).json(results);
  } catch (err) {
    console.log(
      'Unable to retrieve all thoughts from the database. Error: ' + err
    );
    res.status(500).json({
      message:
        'Something went wrong while retriving all thoughts from the database.',
    });
  }
});

// Get : To get a single thought by _id.
router.get('/thought/:id', async (req, res) => {
  try {
    const results = await Thought.findById(req.params.id);
    res.status(200).json(results);
  } catch (err) {
    console.log(
      'Error in retrieving one thought by id from the database. Error: ' + err
    );
    res
      .status(500)
      .json({ message: 'Unable to retieve thought from the database.' });
  }
});

// Post : To create a new thought. Ensure to push the new thoughts _id field to the associated users thought array.
router.post('/create-thought/:id', async (req, res) => {
  try {
    const { thoughtText } = req.body;
    if (!thoughtText) {
      res
        .status(400)
        .json(
          { message: 'Please ensure to enter valid text in order to update the thought.'}
        );
    }
    const newThought = await Thought.create({
      thoughtText: thoughtText,
    });
    const user = await User.findById(req.params.id);
    user.thoughts.push(newThought);
    const updatedUser = await user.save();

    res.status(200).json(newThought);
  } catch (err) {
    console.log(
      'Error in creating a new thought in the database. Error: ' + err
    );
    res
      .status(500)
      .json({ message: 'Unable to create a new thought in the database.' });
  }
});

// Put : update a thought by _id.
router.put('/update-thought/:id', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.id,
      { thoughtText: req.body.thoughtText },
      { new: true }
    );
    res.status(200).json(updatedThought);
  } catch (err) {
    console.log(
      'Error in updating a thought by id in the database. Error: ' + err
    );
    res
      .status(500)
      .json({ message: 'Unable to update thought in the database.' });
  }
});

// Delete : Delete a thought by _id.
router.delete('/delete-thought/:id', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedThought);
  } catch (err) {
    console.log(
      'Error in deleting a thought by id from the database. Error: ' + err
    );
    res
      .status(500)
      .json({ message: 'Unable to delete thought from the database.' });
  }
});

// Post to create a reaction to a thought
router.post('/thoughts/:id/reactions', async (req, res) => {
    try {
        const results = await Reaction.create
    } catch (err) {
        console.log(err.message);
    }
})

module.exports = router;
