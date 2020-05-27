const users = require('../model/users');

module.exports.save = (userDetails) => {
    return new Promise((resolve, reject) => {
        users.create(
            userDetails
        ).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        });
    })
}