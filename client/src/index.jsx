import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearcSubmit = this.handleSearcSubmit.bind(this);
    this.filterMovieListByPartialTitle = this.filterMovieListByPartialTitle.bind(this);

    this.state = {
      movieList: [
        {
          "vote_count": 2485,
          "id": 268,
          "video": false,
          "vote_average": 7,
          "title": "Batman",
          "popularity": 26.20297,
          "poster_path": "/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg",
          "original_language": "en",
          "original_title": "Batman",
          "genre_ids": [
            14,
            28
          ],
          "backdrop_path": "/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg",
          "adult": false,
          "overview": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
          "release_date": "1989-06-23"
        },
        {
          "vote_count": 8475,
          "id": 272,
          "video": false,
          "vote_average": 7.5,
          "title": "Batman Begins",
          "popularity": 42.96349,
          "poster_path": "/dr6x4GyyegBWtinPBzipY02J2lV.jpg",
          "original_language": "en",
          "original_title": "Batman Begins",
          "genre_ids": [
            28,
            80,
            18
          ],
          "backdrop_path": "/65JWXDCAfwHhJKnDwRnEgVB411X.jpg",
          "adult": false,
          "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
          "release_date": "2005-06-10"
        },
        {
          "id": 5555,
          "title": "Superman",
        },
        {
          "id": 666,
          "title": "Iron Man",
        },
        {
          "id": 222,
          "title": "Wonder Woman",
        }
      ],
      viewMovieList: [
        {
          "vote_count": 2485,
          "id": 268,
          "video": false,
          "vote_average": 7,
          "title": "Batman",
          "popularity": 26.20297,
          "poster_path": "/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg",
          "original_language": "en",
          "original_title": "Batman",
          "genre_ids": [
            14,
            28
          ],
          "backdrop_path": "/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg",
          "adult": false,
          "overview": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
          "release_date": "1989-06-23"
        },
        {
          "vote_count": 8475,
          "id": 272,
          "video": false,
          "vote_average": 7.5,
          "title": "Batman Begins",
          "popularity": 42.96349,
          "poster_path": "/dr6x4GyyegBWtinPBzipY02J2lV.jpg",
          "original_language": "en",
          "original_title": "Batman Begins",
          "genre_ids": [
            28,
            80,
            18
          ],
          "backdrop_path": "/65JWXDCAfwHhJKnDwRnEgVB411X.jpg",
          "adult": false,
          "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
          "release_date": "2005-06-10"
        },
        {
          "id": 5555,
          "title": "Superman",
        },
        {
          "id": 666,
          "title": "Iron Man",
        },
        {
          "id": 222,
          "title": "Wonder Woman",
        }
      ],
      searchValue: '',
      
    }
    
  }

  filterMovieListByPartialTitle(movieList, title){
    return movieList.filter(movie => {
      return movie.title.toLowerCase().includes(title.toLowerCase());
    })
  }

  handleSearchChange(event){
    this.setState({searchValue: event.target.value})
  }

  handleSearcSubmit(event){
    event.preventDefault();
    let filteredMovieList = this.filterMovieListByPartialTitle(this.state.movieList, this.state.searchValue);
    if (filteredMovieList.length === 0){
      alert('Movie Not Found');
    } else {
      this.setState({viewMovieList: filteredMovieList});
    }
    this.setState({searchValue: ''});
  }

  render() {
    return (
      <div>
        <Search 
          handleSearchChange={this.handleSearchChange} 
          handleSearchSubmit={this.handleSearcSubmit}
          searchValue={this.state.searchValue}
        />
        <Movie
          viewMovieList={this.state.viewMovieList}
        />
      </div>
    )
  }
}

  ReactDOM.render(<MovieList />, document.getElementById('app'));


