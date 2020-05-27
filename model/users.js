var mongoose = require('mongoose');

var users = mongoose.model('users', {
  "firstName": { type: String, required: true },
  "lastName": { type: String, required: true },
  "genrePreferences": { type: Array },
  "createdDate": { type: Date, default: Date.now }
});

module.exports = users;