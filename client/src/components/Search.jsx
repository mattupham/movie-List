import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <form 
          onSubmit={this.props.handleSearchSubmit}
        >
          <label>
            <input 
              value={this.props.searchValue}
              className="search"
              type="text" 
              placeholder="Enter a Movie" 
              onChange={this.props.handleSearchChange} 
            />
          </label>
          <input 
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }

}

export default Search;