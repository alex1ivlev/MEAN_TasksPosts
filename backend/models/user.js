const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});
const postSchema = new mongoose.Schema({
        title: String,
        body: String
    });
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    street: String,
    city: String,
    zipcode: Number,
    tasks: [taskSchema],
    posts: [postSchema],
})


const user = mongoose.model('User', userSchema);
module.exports = user;
