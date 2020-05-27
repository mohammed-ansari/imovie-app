const netflixMovies = require('../json/netflix.json');
const imdbMovies = require('../json/imdb.json');
const constants = require('./constants');


module.exports.processRecommendation = (genres, provider) => {
    const recommendations = [];
    return new Promise((resolve, reject) => {
        if (genres != null && provider == constants.netflix) {
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