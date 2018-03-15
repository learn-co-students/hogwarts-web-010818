import React, { Component } from 'react';

class HogFilter extends Component {

  updateSort = (event) => {
    this.props.handleSelect(event.target.value)
  }

  updateFilter = event => {
    this.props.handleCheck(event.target.checked)
  }

  render() {
    return (
      <div className="ui form">
        <div className="inline field">
          <label>Sort by</label>
          <select onChange={this.updateSort}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div className="ui toggle checkbox">
          <input onChange={this.updateFilter} type="checkbox" name="greased" tabIndex="0" ></input>
          <label>Show only greased</label>
        </div>
      </div>
    )
  }
}

export default HogFilter
