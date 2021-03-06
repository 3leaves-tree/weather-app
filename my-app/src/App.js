import './App.css';
import React from 'react';
import SearchBar from './SearchBar.js';
import DetailCard from './DetailCard.js';
import axios from 'axios';

const config = require('./config/config.js');
const apiKey = config.weatherToken;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      city: null
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
    axios.get(url)
    .then((results) => {
      this.setState({
        city: location,
        details: results.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>What is the weather in_____?</h1>
        </header>
        <SearchBar handleSearch={this.handleSearch}/>
        <DetailCard details={this.state.details} city={this.state.city}/>
      </div>
    );

  }

}

export default App;
