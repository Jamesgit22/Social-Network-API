const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minLenght: 1, maxLenght: 280},
    userID: { 
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
        }
},
{
    timestamps: true
});

const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought


