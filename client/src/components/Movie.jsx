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
        <span onClick={this.displayMovieDetails.bind(this)}>
          {this.props.movie.title}
        </span>
        <button id="toggleButton"></button>  
      </div>
    )
  }

}

export default Movie;