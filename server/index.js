const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');

const db = [
  {
    "id": 268,
    "title": "Batman Begins",
    "watched": false
  },
  {
    "id": 5555,
    "title": "Superman",
    "watched": false
  },
  {
    "id": 666,
    "title": "Iron Man",
    "watched": false
  },
  {
    "id": 222,
    "title": "Wonder Woman",
    "watched": false
  }
]

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

//loads movie list initially

app.get('/load', (req, res) => {
  movieAPI.getMovies((err, movieDataFromAPI) => {
    let parsedMovieDataFromAPI = movieAPI.parseMovies(movieDataFromAPI);
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send(parsedMovieDataFromAPI).end();
    }
  });
});






app.get('/movies', (req, res) => res.send(db));

app.post('/movie', (req, res) => {
  const newMovie = req.body;
  db.push(newMovie);
  res.send('success');
});