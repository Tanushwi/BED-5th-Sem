const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
});

userSchema.methods.checkPassword = function(password) {
    return this.password === password;
};

module.exports = mongoose.model('User', userSchema);