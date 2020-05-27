const constants = require('../public/javascripts/constants');
const commons = require('../public/javascripts/commons');

/**
 * get movie recommendations on the basis of genre and provider
 */
module.exports.getRecommendationsByTypeAndProvider = (req, res) => {
    if (!req.query.genres || !req.query.provider) {
        res.status(400).send(constants.noRequestFound);
    } else {
        const genres = req.query.genres.split(',');
        //process recommendation on the basis of dummy json data(netflix,imdb)
        commons.processRecommendation(genres, req.query.provider).then((result) => {
            // sort in desc order by movie rating 
            result.sort(function (a, b) {
                return b.movieRating - a.movieRating
            })
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        })
    }
}