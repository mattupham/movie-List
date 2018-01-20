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
        return <div key={movie.id}>
          <h3>{movie.title}</h3>
          
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