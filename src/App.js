import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp.js';

class App extends Component {
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
