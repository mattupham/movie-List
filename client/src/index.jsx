import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleMovieWatchedStatus = this.toggleMovieWatchedStatus.bind(this);
      
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

  search(query) {
    // console.log('query: ', query);
    this.setState({
      search: query
    })
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

  toggleMovieWatchedStatus(toggledMovie) {
    console.log('toggled movie', toggledMovie);
    toggledMovie.watched = toggledMovie.watched ? !toggledMovie.watched : true;
    this.setState({
      viewStatus: this.state.viewStatus
    })
  }

  addMovie(movieTitle) {
    let newMovieList = this.state.movieList;
    newMovieList.push({
      "id": 1,
      "title": movieTitle,
      "watched": false
    });
    //add to database
    //get all movies
    this.setState({movieList: newMovieList});
  }

  render() {
    return (
      <div>
        <Search search={this.search}/>
        <AddMovie addMovie={this.addMovie}/>
        {
          this.displayMovies().map((movie, index) => 
          {
            return <Movie 
              key={index}
              id={index}
              movie={movie}
              toggleMovieWatchedStatus={this.toggleMovieWatchedStatus}
            />
          })
        }
      </div>
    )
  }

}

ReactDOM.render(<MovieList />, document.getElementById('app'));


