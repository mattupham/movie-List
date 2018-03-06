import React from 'react';
import ReactDOM from 'react-dom';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Add a Movie" 
          ref={input => this.addInput = input} 
        />
        <button 
          onClick={
            () => {
              this.props.addMovie(this.addInput.value);
            }
          }>
          Add!
        </button>
      </div>
    );
  }

}

export default AddMovie;