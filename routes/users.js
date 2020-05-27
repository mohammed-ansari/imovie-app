const userData = require('../data/user-data');
const constants = require('../public/javascripts/constants');

/**
 * save user data
 */
module.exports.saveUserData = (req, res) => {
  var userDetails = req.body;
  if (!userDetails) {
    res.status(constants.statusCode400).send(constants.noRequestFound);
  } else {
    userData.save(userDetails).then((result) => {
      res.status(constants.statusCode200).send(result);
    }).catch((err) => {
      res.status(constants.statusCode500).send(err);
    });
  }
}
