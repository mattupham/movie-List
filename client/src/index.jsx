import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx';
import $ from 'jquery';
import Axios from 'axios';



class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleMovieWatchedStatus = this.toggleMovieWatchedStatus.bind(this);
    
    this.setViewStatusToWatched = this.setViewStatusToWatched.bind(this);
    this.setViewStatusToUnwatched = this.setViewStatusToUnwatched.bind(this);
    this.setViewStatusToAll = this.setViewStatusToAll.bind(this);

  
    this.state = {
      movieList: [],
      viewStatus: 'all',
      search: ''
    }  
  }

  componentDidMount() {
    Axios.get('/load')
    .then(function (res) {
      //set initial movie list state
      let initalMovieList = res.data;
      this.setState({movieList: initalMovieList});
    })
    .catch(function (err) {
      console.log(err);
    });
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
        if (this.state.viewStatus === 'watched') {
          // return (movie.watched) ? true : false;
          return movie.watched;
        } else {
          // return (!movie.watched) ? true : false;
          return !movie.watched;
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

  setViewStatusToWatched() {
    this.setState({viewStatus: 'watched'});
  }

  setViewStatusToUnwatched() {
    this.setState({viewStatus: 'unwatched'});
  }

  setViewStatusToAll() {
    this.setState({
      viewStatus: 'all',
      search: ''
    });
  }

  render() {
    return (
      <div>
        <Search search={this.search}/>
        <AddMovie addMovie={this.addMovie}/>

        <button className="filterButton" onClick={this.setViewStatusToWatched}>Watched Movies</button>
        <button className="filterButton" onClick={this.setViewStatusToUnwatched}>Unwatched Movies</button>
        <button className="filterButton" onClick={this.setViewStatusToAll}>All Movies</button>
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


