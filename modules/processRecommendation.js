const netflixMovies = require('../data/providerData/netflix.json');
const imdbMovies = require('../data/providerData/imdb.json');
const constants = require('./constants');


const processRecommendation = (genres, provider) => {
  const recommendations = [];
  return new Promise((resolve, reject) => {
    if (genres != null && provider == constants.netflix) {
      /**
       * Currently I have imported a static json and the computed the recommendation. Once the third party api for netflix or imdb is available then we can change this to an externall call.
       */
      for (let i = 0; i < netflixMovies.length; i++) {
        const movie = netflixMovies[i];
        for (let j = 0; j < movie.genres.length; j++) {
          if (genres.includes(movie.genres[j])) {
            recommendations.push(movie);
            break;
          }
        }


      }
    } else if (genres != null && provider == constants.imdb) {
      for (let i = 0; i < imdbMovies.length; i++) {
        const movie = imdbMovies[i];
        for (let j = 0; j < movie.genres.length; j++) {
          if (genres.includes(movie.genres[j])) {
            recommendations.push(movie);
            break;
          }
        }


      }
    } else {
      reject("error occured while processing recommendations");
    }
    resolve(recommendations);

  })
}

module.exports = processRecommendation;