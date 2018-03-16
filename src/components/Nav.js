import piggy from '../porco.png';
import React from 'react';

class Nav extends React.Component {
  state = {
    sortValue: 'name'
  }

  handleChangeSort = e => {
    this.setState({
      sortValue: e.target.value
    }, () => this.props.handleSort(this.state.sortValue));
  };


  render () {
    return (
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
        <select className="ui dropdown"
                onChange={this.handleChangeSort}
                value={this.state.sortValue}>
          <option value="name">Name</option>
          <option value="weight_ratio">Weight Ratio</option>
          <option value="greased">Greased</option>
        </select>
      </div>
    )
  }
}

export default Nav
