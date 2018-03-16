import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'

class App extends Component {
  state = {
    filter: 'name',
    reset: false
  }

  handleSort = filter => {
    this.setState(
      {
        filter: filter,
        reset: true
      }
    );
  }

  render() {
    return (
      <div className="App">
          <Nav handleSort={this.handleSort} />
          <HogContainer reset={this.state.reset} filter={this.state.filter}/>
      </div>
    )
  }
}

export default App;
