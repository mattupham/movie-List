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
      this.props.viewMovieList.map((movie) => {
        return <div key={movie.id}>
          {movie.title}
        </div>;
      })
    )
  }
}

export default Movie;