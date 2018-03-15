import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'

class App extends Component {
  state = {
    filter: ''
  }

  handleSort = filter => {
    this.setState(
      {
        filter: filter
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="App">
          <Nav handleSort={this.handleSort} />
      </div>
    )
  }
}

export default App;
