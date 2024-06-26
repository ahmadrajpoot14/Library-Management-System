// user.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    displayName: {
        type: String
    },
    email: {
        type: String
    },
});


const User = mongoose.model('User', UserSchema);

module.exports = User;
