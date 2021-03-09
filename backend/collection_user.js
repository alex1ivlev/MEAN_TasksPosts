const mongoose = require('mongoose');
const user = require('./models/user.js');

mongoose.connect('mongodb://localhost:27017/tasks_posts',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log("Mongo connection open!!")
    })
    .catch(err => {
        console.log("oh no mongo connection failed")
        console.log(err)
    });

user.insertMany([
    {
        name: 'Dana Cohen',
        email: 'dana@walla.co.il',
        street: 'Herzl 123',
        city: 'Tel-Aviv',
        zipcode: 662255,
        tasks: [{title: 'Editing Post 1', completed: true},
            {title: 'Editing Post 2', completed: false},
            {title: 'Editing Post 3', completed: false}],
        posts: [{title: 'The Emancipation of Women', body: 'some body'},
            {title: 'The History of White City', body: 'some body'},
            {title: 'New age', body: 'some body'},]
    },
    {
        name: 'Yosi Cohen',
        email: 'yoss@gmail.com',
        street: 'Jabotinski 1',
        city: 'Jerusalem',
        zipcode:224488,
        tasks: [{title: 'Send photographs to print', completed: true},
            {title: 'Photo session Jerusalem', completed: false}],
        posts: [{title: 'Photos Tel- Aviv', body: 'some body'},
            {title: 'Art Gallery Tel- Aviv', body: 'some body'}]
    },
    {
        name: 'Alex Iv',
        email: 'alex@yahoo.com',
        street: 'Namir 123',
        city: 'Tel Aviv',
        zipcode:90210,
        tasks: [{title: 'Holiday Edition', completed:true},
            {title: 'American Jewish Edition', completed:true},
            {title: 'Special Edition', completed:true},
            {title: 'Online shopping', completed:false}],
        posts: [{title: 'New post', body: 'some body'},
            {title: 'Definition of success post', body: 'some body'},
            {title: 'New Department', body: 'some body'}]
    },
    {
        name: 'Almog Baku',
        email: 'almog@gmail.com',
        street: 'Namir 123',
        city: 'Tel Aviv',
        zipcode:90210,
        tasks: [{title: 'Re-organization', completed: false},
            {title: 'Send email to managment', completed: false},
            {title: 'Action items for meeting', completed: false}],
        posts: [{title: 'Changes in the global world', body: 'some body'},
            {title: 'Changes of the companies in the last decade', body: 'some body'},]
    },
    {
        name: 'Noa Buchsbaum',
        email: 'nonik@walla.com',
        street: 'Yehuda Macabbi 23',
        city: 'Haifa',
        zipcode:885500,
        tasks: [{title: 'Shifts', completed:true},
            {title: 'Multi definition', completed:true},
            {title: 'Hr utilities', completed:true}],
        posts: [{title: 'My last department meeting', body: 'some body'},
            {title: 'Possible improvements', body: 'some body'},
            {title: 'Possible improvements 2', body: 'some body'}]
    },
    {
        name: 'Dana Horovitz',
        email: 'dandi@gmail.com',
        street: 'Florentin 20',
        city: 'Tel-Aviv',
        zipcode:995577,
        tasks: [{title: 'Shifts', completed:false},
            {title: 'Multi definition', completed:false},
            {title: 'Hr utilities', completed:false}],
        posts: [{title: 'My last department meeting', body: 'some body'},
            {title: 'Possible improvements', body: 'some body'}]
    },
    {
        name: 'Roy Lieber',
        email: 'roy@gmail.com',
        street: 'Balfur 19',
        city: 'Haifa',
        zipcode:106688,
        tasks: [{title: 'New ideas', completed:false},
            {title: 'Employee survey', completed:false}],
        posts: [{title: 'Employee survey brainstorming', body: 'some body'},
            {title: 'Possible improvements', body: 'some body'}]
    },
    {
        name: 'Anastasia Tunkin',
        email: 'ana.t@yandex.ru',
        street: 'Ha Neviim 78',
        city: 'Netaniya',
        zipcode:996644,
        tasks: [{title: 'New post- write', completed:false},
            {title: 'Update the data base of customers', completed: true},
            {itle: 'Editing the collections', completed: false}],
        posts: [{title: 'Iherb expert ', body: 'some body'},
            {title: 'Ideas for improvements', body: 'some body'}]
    },
    {
        name: 'Sanda Agmon',
        email: 'sandy@gmal.com',
        street: 'Shoam 20',
        city: 'Kfar Yona',
        zipcode:773300,
        tasks: [{title: 'Meeting with Anastasia T.', completed:true},
            {title: 'Meeting with Alex', completed:false},
            {title: 'Meeting with Melany', completed:false}],
        posts: [{title: 'How to find IG', body: 'some body'},
            {title: 'Food Expertise 1-1', body: 'some body'},]
     },
    {
        name: 'Melany Rocotovitch',
        email: 'mel@walla.co.il',
        street: 'Antokolski 6',
        city: 'Ashdod',
        zipcode:76320,
        tasks: [{title: 'New directory', completed:false},
            {title: 'New project brainstorming', completed:true}],
        posts: [{title: 'Project Tech Revolution', body: 'some body'}]
    }

], )
    .then(data => {
        console.log("It worked!")
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })
