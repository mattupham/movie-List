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

        <input type="text" placeholder="Enter a Movie" ref={input => this.searchInput = input} />
        <button onClick={ () => {this.props.handleSearchSubmit(this.searchInput.value);} }>Search!</button>

        {/* <form 
          onSubmit={}
        >
        
          <label>
            <input 
              ref={(input) => { this.searchInput = input; }}
              // value={this.props.searchValue}
              className="search"
              type="text" 
              placeholder="Enter a Movie" 
              // onChange={this.props.handleSearchChange} 
            />
          </label>
          <input 
            type="submit"
            value="Search"
            onClick={this.props.handleSearcSubmit(this.searchInput.value)}


          />
        </form> */}
      </div>
    );
  }

}

export default Search;