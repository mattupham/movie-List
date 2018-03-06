import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Enter a Movie" 
          ref={input => this.searchInput = input} 
        />
        <button 
          onClick={ () => {
            this.props.search(this.searchInput.value);
          } }>
          Search!
        </button>
      </div>
    );
  }

}

export default Search;