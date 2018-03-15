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
      <div>
        <select onChange={this.updateSort}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        Greased
        <input type="checkbox" name="Greased" onChange={this.updateFilter}></input>
      </div>
    )
  }
}

export default HogFilter
