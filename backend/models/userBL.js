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
                $set: {
                    name: newData.name,
                    email: newData.email,
                    street: newData.street,
                    city: newData.city,
                    zipcode: newData.zipcode
                }
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

exports.addTask = function (id, newtask) {
    return new Promise((resolve, reject) => {
        user.findByIdAndUpdate(id,
            {
                $push: {
                    tasks: newtask,
                }
            }, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve('Task Created !')
                }
            })

    })
}

exports.completeTask = function (id, task_id) {
    return new Promise((resolve, reject) => {
        user.updateOne(
            {
                "_id": id,
                "tasks._id": task_id,
            },
            {
                $set: {
                    "tasks.$.completed": true,
                }
            }, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve('Task is done !')
                }
            })

    })

}
exports.addPost = function (id, newpost) {
    return new Promise((resolve, reject) => {
        user.findByIdAndUpdate(id,
            {
                $push: {
                    posts: newpost,
                }
            }, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve('Post Created !')
                }
            })

    })
}
