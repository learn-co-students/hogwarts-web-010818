import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigContainer from './PigContainer'

class App extends Component {
  state = { filterKeyword: '' }

  filter = (e) => {
    this.setState({ filterKeyword: e.target.value })
  }

  render() {
    return (
      <div className="App">
        < Nav filter={this.filter} />
        < PigContainer filterKeyword={this.state.filterKeyword}/>
      </div>
    )
  }
}

export default App;
