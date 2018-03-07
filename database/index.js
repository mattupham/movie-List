const mysql = require('mysql');
const movieAPI = require('../lib/movieAPI.js');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'movielist'
});



const selectAll = (cb) => {
  const query = 'SELECT * FROM movies';
  connection.query(query, (err, movies) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, movies);
    }
  });
};



const insertOne = (movie, cb) => {
  const query = 'INSERT INTO MOVIES (title, description, release_date, vote_average, vote_count, watched) values (?, ?, ?, ?, ?, ?)';
  connection.query(query, [...dataToBeInserted], (err) => {
      if(err) {
        cb(err);
      } else {
        cb(null);
      }
  });
};




const insertMany = (movies, cb) => {
  const query = 'INSERT INTO MOVIES (id, title, description, release_date, vote_average, vote_count, watched) VALUES ?';
  const parsedMovieData = movieAPI.parseMovies(movies);
  connection.query(query, [parsedMovieData], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
  });
}




module.exports = {
  selectAll:  selectAll,
  insertOne:  insertOne,
  insertMany: insertMany
}