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
    this.setState({displayDetails: true});
  }

  render() {
    return (
      <div className="movieContainer">
        <span className="movieTitleContainer">{this.props.movie.title}</span>
        <button 
          className="toggleWatchStatusButton" 
          onClick={
            () => {
              this.props.toggleMovieWatchedStatus(this.props.movie)
            }
          }
        >
          {this.props.movie.watched ? 'Seen' : 'Unseen'}
        </button>
      </div>
    )
  }

}

export default Movie;