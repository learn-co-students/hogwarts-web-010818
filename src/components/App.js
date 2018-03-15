import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'

class App extends Component {
  state = {
    filter: 'name'
  }

  handleSort = filter => {
    this.setState(
      {
        filter: filter
      }
    );
  }

  render() {
    return (
      <div className="App">
          <Nav handleSort={this.handleSort} />
          <HogContainer filter={this.state.filter}/>
      </div>
    )
  }
}

export default App;
