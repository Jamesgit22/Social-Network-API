const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/},
    thoughts: [{ 
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Thought"
    }],
    friends: [{ 
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;