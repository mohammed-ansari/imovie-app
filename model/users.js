var mongoose = require('mongoose');

var users = mongoose.model('users', {
    "firstName": {type: String},
    "lastName": {type: String},
    "moviePreferences":{type: Array}
  });

  module.exports = users;