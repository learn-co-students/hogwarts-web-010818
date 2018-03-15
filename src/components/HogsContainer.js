import React, { Component } from 'react';
import hogs from '../porkers_data'
import HogsList from './HogsList'
import HogFilter from './HogFilter'



class HogsContainer extends Component {

  state = {
    hogs:hogs
  }

  sortPigs = (sortBy) => {
    let newHogs;
    switch(sortBy) {
      case 'name':
        newHogs = this.sortByName(this.state.hogs)
        break;
      case 'weight':
        newHogs = this.sortByWeight(this.state.hogs)
        break;
      }
      this.setState({
        hogs:newHogs
      })
    }

  sortByName = (hogs) => {
      return this.state.hogs.sort((hogA, hogB) => {
        return (hogA.name < hogB.name) ? -1 : 1
      })
    }

  sortByWeight = (hogs) => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return this.state.hogs.sort((hogA, hogB) => {
      return (hogA[weight] < hogB[weight]) ? -1 : 1
    })
  }

  filterPigs = (checked) => {
    let filteredHogs;
    if (checked) {
      filteredHogs = this.state.hogs.filter(hog => {
        return hog.greased === true
      })
    } else {
      filteredHogs = hogs
    }
    this.setState({
      hogs:filteredHogs
    })
  }

  render() {
    return(
      <div className="hog-container">
        <div className="ui rasied segment">
          < HogFilter handleSelect={this.sortPigs} handleCheck={this.filterPigs}/>
        </div>
        <div className="ui raised segment">
          < HogsList hogs={this.state.hogs} />
        </div>

      </div>
    )
  }
}

export default HogsContainer
