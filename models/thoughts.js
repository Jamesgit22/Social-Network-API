const mongoose = require('mongoose');
const reactionsSchema = require('./reactions')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minLenght: 1, maxLenght: 280},
    username: { 
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
        },
    reactions: [reactionsSchema]
},
{
    timestamps: true
});

const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought


