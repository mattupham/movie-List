import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      viewStatus: 'all',
      search: ''
    }  
  }

  componentDidMount() {
    this.setState(
      {
        movieList: [
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
      }
    );
  }

  filterByViewStatus(movieListFilteredBySearch) {
    if (this.state.viewStatus === 'all') {
      return movieListFilteredBySearch;
    } else {
      return movieListFilteredBySearch.filter(movie => {
        if (this.state.view === 'watched') {
          return (movie.watched) ? true : false;
        } else {
          return (!movie.watched) ? true : false;
        }
      });
    }
  }

  filterBySearch(query) {
    if (query === ''){
      return this.state.movieList;
    } else {
      return this.state.movieList.filter((movie) => {
        return movie.title.toLowerCase().includes(query.toLowerCase());
      });
    }
  }

  displayMovies() {
    let searchFilteredMovieList = this.filterBySearch(this.state.search);
    return this.filterByViewStatus(searchFilteredMovieList);
  }

  render() {
    return (
      <div>
        {
          this.displayMovies().map((movie, index) => 
          {
            // console.log('movie', movie);
            return <Movie 
              key={index}
              id={index}
              movie={movie}
              // handleToggle={this.handleToggle}
            />
          })
        }
      </div>
    )
  }

}

ReactDOM.render(<MovieList />, document.getElementById('app'));


