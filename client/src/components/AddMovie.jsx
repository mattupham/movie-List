import React from 'react';
import ReactDOM from 'react-dom';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <form 
          onSubmit={this.props.handleAddSubmit}
        >
          <label>
            <input 
              value={this.props.addValue}
              className="search"
              type="text" 
              placeholder="Enter a Movie" 
              onChange={this.props.handleAddChange} 
            />
          </label>
          <input 
            type="submit"
            value="Add"
          />
        </form>
      </div>
    );
  }

}

export default AddMovie;