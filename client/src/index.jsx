import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.filterByViewStatus = this.filterByViewStatus.bind(this);

    let db = [
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

    //add watched property to movie (default false)
    this.state = {
      movieList: [],
      viewStatus: 'all',
      search: ''
    }  
  }

  componentDidMount() {
    this.setState({movieList: db});
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



  render() {
    return (
      <div>
        {
          this.displayMovies().map((movie, index) => 
          {
            return <Movie 
              key={index}
              id={index}
              movie={movie}
              handleToggle={this.handleToggle}
            />
          })
        }
      </div>
    )
  }


}




/*
class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.setWatch = this.setWatch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.filteredMovieListBySearch = this.filteredMovieListBySearch.bind(this);
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

    //add watched property to movie (default false)
    this.state = {
      movieList: db,
      viewedMovieList: db,
      searchValue: '',
      addValue: '',
      //all, watched, unwatched
      view: 'all'
    }  
  }


  filteredMovieListBySearch(movieList, title){
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
    let filteredMovieListBySearch = this.filteredMovieListBySearch(movieList, this.state.searchValue);
    let filteredMovieListByWatchStatus = this.filteredMovieListByWatchStatus(filteredMovieListBySearch, this.state.view);
    return filteredMovieListByWatchStatus;
  }

  searchMovies(movieTitle){
    alert('movie title', movieTitle)
    this.setState({searchValue: movieTitle});
  }

  displayMovies() {
    console.log('displayed')
    let searchFilteredMovieList =  this.filteredMovieListBySearch(this.state.movieList, this.state.searchValue);
    return this.filteredMovieListByWatchStatus(searchFilteredMovieList, this.state.view);
  }


  setWatch(movieList, target){
    movieList.forEach(function(movie){
      if (target === movie.title){
        alert('match found')
        movie.watched = !movie.watched;
      }
    })
    console.log('movie list', movieList);
    return movieList;
  }

  handleToggleWatchStatus(event){
    let movieList = this.state.movieList;
    let viewedMovieList = this.state.viewedMovieList;
    let movieTitle = event.target.value;
    let updatedMovieList = this.setWatch(movieList, movieTitle);
    let updatedViewedMovieList = this.setWatch(viewedMovieList, movieTitle);
    console.log('updatedViewedMovieLIst', updatedViewedMovieList[0])
    this.setState({
      // movieList: updatedMovieList,
      viewedMovieList: updatedViewedMovieList
    });
    // this.setWatch(updatedMovieList, movieTitle);
    // this.setWatch(updatedViewedMovieList, movieTitle);
    
    // this.setState(
    //   {
    //     // movieList: this.setWatch(movieList, movieTitle), 
    //     viewedMovieList: this.setWatch(viewedMovieList, movieTitle)
    //   }
    // );
    
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
      this.setState({movieList: newMovieList});
    }
    this.setState({addValue: ''});
  }

  handleSearchChange(event){
    // this.setState({searchValue: event.target.value})
  }




  handleSearchSubmit(searchQuery){
    // alert(searchQuery);
    this.setState({searchValue: searchQuery});
    // if (searchQuery === ''){
    //   alert('Please Enter a Movie to Search');
    // } else {

    //   console.log(this.filterAllMovies(this.state.movieList));

    //   this.setState({searchValue: ''});
    // }
  }

  render() {
    return (
      <div>
        <Search 
          handleSearchChange={this.handleSearchChange} 
          handleSearchSubmit={this.handleSearchSubmit}
          searchValue={this.state.searchValue}
        />
        <AddMovie 
          handleAddChange={this.handleAddChange}
          handleAddSubmit={this.handleAddSubmit}
          addValue={this.state.addValue}
        />
        <Movie

          movieList={this.displayMovies()}
          handleToggleWatchStatus={this.handleToggleWatchStatus}
        />
      </div>
    )
  }
}
*/
ReactDOM.render(<MovieList />, document.getElementById('app'));


