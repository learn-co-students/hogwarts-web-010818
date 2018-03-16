import React from 'react';
import PigCard from './PigCard'
import uuid from 'uuid';
import hogs from '../porkers_data';


export default class PigContainer extends React.Component {
  state = { pigs: [...hogs] }

  componentWillReceiveProps(nextProps) {
    if (this.props.filterKeyword !== nextProps.filterKeyword) {
      this.setState({ pigs: this.applyFilter(nextProps.filterKeyword) });
    }
  }

  applyFilter = (filterKeyword) => {
    let allPigs = [...hogs];
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
    if (filterKeyword === 'greased') {
      return allPigs.filter((pig) => ( pig.greased ))
    } else if (filterKeyword === weight) {
      return allPigs.sort((a, b) => ( a[weight] - b[weight] ))
    } else if (filterKeyword === 'name') {
      return allPigs.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      })
    } else {
      return allPigs;
    }
  }

  generatePigs = () => {
    return this.state.pigs.map((pig) => {
      return < PigCard info={ pig } key={ uuid() } />
    })
  }

  render() {
    return (
      <div className="ui grid container">
        <div>{ this.generatePigs() }</div>
      </div>
    )
  }
}
