const axios = require('axios');
const TMDB_API = require('./api_key.js');

console.log('TMDP API: ', TMDB_API);

//add in api key file

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

module.exports = {
  getMovies
}



