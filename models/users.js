const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/},
    thoughts: [_id],
    friends: [_id]
});

const User = mongoose.model('User', userSchema);

module.exports = User;