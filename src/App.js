import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogsContainer from './containers/HogsContainer'

class App extends Component {
  // state = {
  //   filters: {name:"A-Z", weight:"Ascending"}
  // }



  render() {
    return (
      <div className="App">
        <Nav />
        <HogsContainer />
      </div>
    )
  }
}

export default App;
