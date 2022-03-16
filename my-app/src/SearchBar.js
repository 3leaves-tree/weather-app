import './App.css';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({
      location: event.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.location);
    this.setState({
      location: ''
    })

  }

  render() {
    return (
      <div className='search'>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            value = {this.state.location}
            onChange = {this.handleChange}
            placeholder="San Francisco, New York City, London..."
          />
          <IconButton onClick={this.submit} sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
       </Paper>
      </div>

    );
  }

}


export default SearchBar;