const userData = require('../data/user-data');
const constants = require('../public/javascripts/constants');

/**
 * save user data
 */
module.exports.saveUserData = (req, res) => {
  var userDetails = req.body;
  if (!userDetails) {
    res.status(400).send(constants.noRequestFound);
  } else {
    userData.save(userDetails).then((result) => {
      console.log("user created with id: "+result._id);
      res.status(200).send(result);
    }).catch((err) => {
      res.status(500).send(err);
    });
  }
}
