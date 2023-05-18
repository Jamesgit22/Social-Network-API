const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionBody: {type: String, required: true, maxLength: 280},
    username: { type: String, required: true}
},
{
    timestamps: true
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;