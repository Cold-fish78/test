const mongoose = require('mongoose');
const db = require('../config/mongoose');
const crypto = require('crypto');
// for passreset
const bcrypt = require('bcrypt');
const bcryptSalt = process.env.BCRYPT_SALT;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;