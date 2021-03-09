const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const corc = require('cors');
let bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/tasks_posts',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console,'connection error:'));
db.once("open", () => {
    console.log("Database connected");
})


const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render(`Home`)
})
app.get('/users', async (req, res) =>{
    let Users;
    await Users.find({})
});
app.use(bodyParser.urlencoded({extended:true}))
    .use(bodyParser.json());
app.use(corc());

const userController = require('./controllers/userController');
app.use('/api/users', userController);
app.listen(3000, () => {
    console.log('Serving on port 3000')
})
