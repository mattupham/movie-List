import React from 'react';
import ReactDOM from 'react-dom';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    

    return (
      this.props.movieList.map((movie) => {
        let isWatched = movie.watched;
        return <div className="movieContainer" key={movie.id}>
          <div className="movieTitle">{movie.title}</div>
          
          { isWatched 
            ? (<button 
                value={movie.title}
                onClick={this.props.handleToggleWatchStatus}
                className="toggleWatchStatusButton"
              >
              Watched
              </button>)
            : (<button
                value={movie.title}
                className="toggleWatchStatusButton"
                onClick={this.props.handleToggleWatchStatus}
              >
              Unwatched
              </button>
            )
          }
        </div>;
      })
    )
  }
}

export default Movie;