import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.setWatch = this.setWatch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearcSubmit = this.handleSearcSubmit.bind(this);
    this.filterMovieListBySearch = this.filterMovieListBySearch.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleToggleWatchStatus = this.handleToggleWatchStatus.bind(this);

    let db = [
      {
        "id": 268,
        "title": "Batman Begins",
        "watched": false
      },
      {
        "id": 5555,
        "title": "Superman",
        "watched": true
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

    //add watched property to move (default false)
    this.state = {
      movieList: db,
      viewedMovieList: db,
      searchValue: '',
      addValue: '',
      //all, watched, unwatched
      view: 'all'
    }  
  }


  filterMovieListBySearch(movieList, title){
    return movieList.filter(movie => {
      return movie.title.toLowerCase().includes(title.toLowerCase());
    })
  }

  filteredMovieListByWatchStatus(movieList, watchedStatus){
    if (watchedStatus === 'all'){
      return movieList;
    } else {
      return movieList.filter(function(movie){
        if (watchedStatus === 'watched'){
          return movie.watched === true;
        } else if (watchedStatus === 'unwatched'){
          return movie.watched === false;
        }
      });
    }
  }

  filterAllMovies(movieList){
    let filteredMovieListBySearch = this.filterMovieListBySearch(movieList, this.state.searchValue);
    let filteredMovieListByWatchStatus = this.filteredMovieListByWatchStatus(filteredMovieListBySearch, this.state.view);
    return filteredMovieListByWatchStatus;
  }



  setWatch(movieList, target){
    movieList.forEach(function(movie){
      if (target === movie.title){
        alert('match found')
        movie.watched = !movie.watched;
      }
    })
    return movieList;
  }

  handleToggleWatchStatus(event){
    let updatedMovieList = this.state.movieList;
    let updatedViewedMovieList = this.state.viewedMovieList;
    let movieTitle = event.target.value;
    this.setState(
      {
        movieList: this.setWatch(updatedMovieList, movieTitle), 
        viewedMovieList: this.setWatch(updatedViewedMovieList, movieTitle)
      }
    );
  }

  handleAddChange(event){
    this.setState({addValue: event.target.value})
  }

  handleAddSubmit(event){
    //add to database
    event.preventDefault();
    let context = this;
    let isMovieInList = this.state.movieList.map(function(movie){
      return movie.title;
    }).some(function(title){
      return title.toLowerCase() === context.state.addValue.toLowerCase();
    });
    if (isMovieInList){
      alert('Movie is already in list');
    } else if (this.state.addValue === ''){
      alert('Please Enter a Movie to Add');
    } else {
      let newMovie = {id: 1, title: this.state.addValue};
      let newMovieList = this.state.movieList;
      //add a movie to movieList
      newMovieList.push(newMovie);
      //update movieList and re-render
      this.setState({movieList: newMovieList, movieList: newMovieList});
    }
    this.setState({addValue: ''});
  }

  handleSearchChange(event){
    this.setState({searchValue: event.target.value})
  }

  handleSearcSubmit(event){
    event.preventDefault();
    if (this.state.searchValue === ''){
      alert('Please Enter a Movie to Search');
    } else {

      console.log(this.filterAllMovies(this.state.movieList));

      // let filteredMovieList = this.filterMovieListBySearch(this.state.movieList, this.state.searchValue);
      // if (filteredMovieList.length === 0){
      //   alert('Movie Not Found');
      // } else {
      //   this.setState({movieList: filteredMovieList});
      // }
      this.setState({searchValue: ''});
    }
  }

  render() {
    return (
      <div>
        <Search 
          handleSearchChange={this.handleSearchChange} 
          handleSearchSubmit={this.handleSearcSubmit}
          searchValue={this.state.searchValue}
        />
        <AddMovie 
          handleAddChange={this.handleAddChange}
          handleAddSubmit={this.handleAddSubmit}
          addValue={this.state.addValue}
        />
        <Movie
          movieList={this.state.movieList}
          handleToggleWatchStatus={this.handleToggleWatchStatus}
        />
      </div>
    )
  }
}

  ReactDOM.render(<MovieList />, document.getElementById('app'));


