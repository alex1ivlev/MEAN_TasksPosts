const user = require('./user');

exports.getAllUsers = function () {
    return new Promise((resolve, reject) => {
            user.find({}, function (err, usersData) {
                if (err) {
                    reject(err);
                } else {
                    resolve(usersData);
                }
            })
        }
    )
}

exports.getUser = function (id) {
    return new Promise((resolve, reject) => {
        user.findById(id, function (err, userData) {
            if (err) {
                reject(err);
            } else {
                resolve(userData);
            }
        })
    })
}

exports.addUser = function (newUser) {
    return new Promise((resolve, reject) => {
        let u = new user({
            name: newUser.name,
            email: newUser.email,
            street: newUser.street,
            city: newUser.city,
            zipcode: newUser.zipcode

        });

        u.save(function (err) {
            if (err) {
                reject(err);
            } else {
                resolve('Created !');
            }
        })
    })
}

exports.updateUser = function (id, newData) {
    return new Promise((resolve, reject) => {
        user.findByIdAndUpdate(id,
            {
                name: newData.name,
                email: newData.email,
                street: newData.street,
                city: newData.city,
                zipcode: newData.zipcode,
                tasks: [{
                    title: newData.title,
                    completed: Boolean
                }],
                posts: [{
                    title: newData.title,
                    body: newData.body
                }]
                }, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve('Updated !')
                }
            })

    })

}


exports.deleteUser = function (id) {
    return new Promise((resolve, reject) => {
        user.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve('Deleted !');
            }
        })
    })
}
