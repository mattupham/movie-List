const axios = require('axios');
const TMDB_API = require('./api_key.js');

const getMovies = (cb) => {
  axios.get('https://api.themoviedb.org/3/movie/now_playing', {
    params: {api_key: TMDB_API.KEY}
  })
  .then(res => {
    cb(null, res.data.results);
  })
  .catch(err => {
    cb(error, null);
  });
}

const parseMovies = (movieData) => {
  return movieData.map(movieObj => {
    return {
            id: movieObj.id, 
            title: movieObj.title,
            overview: movieObj.overview,
            release_date: movieObj.release_date,
            vote_average: movieObj.vote_average,
            vote_count: movieObj.vote_count
          }
  });
}

module.exports = {
  getMovies,
  parseMovies
}



