import React, { Component } from 'react';
import hogs from '../porkers_data'

export default class HogContainer extends React.Component {
  state = {
    filteredHogs: []
  }

  filterHogs = () => {
    if (this.props.filter === 'greased') {
      return hogs.filter((hog) => {
        return hog.greased === true
      })
    } else if (this.props.filter === 'name') {
        return hogs.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          // names must be equal
          return 0;
        })
    } else {
      return hogs.sort((a, b) => a[this.props.filter] - b[this.props.filter])
    }
  }

  render() {
    console.log(this.filterHogs())
    return (
      <div className="ui grid container">
      </div>
    )
  }
}
