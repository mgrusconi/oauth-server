'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    id: String,
    email: { type: String, unique: true, required: true, dropDups: true },
    password: { type: String, required: true },
    roles: { type: Array, required: true }
});

module.exports = mongoose.model('User', UserSchema);