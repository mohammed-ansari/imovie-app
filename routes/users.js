const userData = require('../data/user-data');
const constants = require('../modules/constants');

/**
 * save user data
 */
module.exports.saveUserData = (req, res) => {
  var userDetails = req.body;
  if (!userDetails.firstName || !userDetails.lastName) {
    res.status(400).send(constants.invalidRequest);
  } else {
    userData.save(userDetails).then((result) => {
      console.log("user created with id: " + result._id);
      res.status(200).send(result);
    }).catch((err) => {
      res.status(500).send(err);
    });
  }
}
