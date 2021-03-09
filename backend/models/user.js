const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    street: String,
    city: String,
    zipcode: Number,
    tasks: [{
        title: String,
        completed: Boolean
    }],
    posts: [{
        title: String,
        body: String
    }]
})


const user = mongoose.model('User', userSchema);
module.exports = user;
