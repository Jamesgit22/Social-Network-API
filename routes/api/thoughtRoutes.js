const router = require('express').Router();
const { Thought } = require('../../models');

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

// Del : Delete a thought by _id.


module.exports = router;
