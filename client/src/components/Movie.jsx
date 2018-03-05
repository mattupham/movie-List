import React from 'react';
import ReactDOM from 'react-dom';

class Movie extends React.Component {

  constructor(props) {
    super(props);

    // this.displayMovieDetails = this.displayMovieDetails.bind(this);

    this.state = {
      displayDetails: false
    }
  }

  displayMovieDetails() {
    this.setState({ displayDetails: true });
  }

  render() {
    return (
      <div>
          <span onClick={this.displayMovieDetails.bind(this)}>{movie.title}</span>
            {/* { this.state.displayDetails && <MovieDetails movie={movie} /> } */}
          <button id="toggleButton" 
            // onClick={
            //   // () => {this.props.handleToggle(movie)}
            // }
            >
            {/* {movie.watched ? 'Seen' : 'Unseen'} */}
          </button>        
      </div>
    )
  }

}

export default Movie;