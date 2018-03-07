const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

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
app.get('/load', (req, res) => res.send(db));