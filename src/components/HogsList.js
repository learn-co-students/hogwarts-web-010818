import React, { Component } from 'react';
import HogCard from './HogCard'



class HogsList extends Component {


  render() {
    const hogCards = this.props.hogs.map(hog => {
      return < HogCard hog={hog} key={hog.name}/>
    })

    return(
      <div className="hog-container ui cards">
        {hogCards}
      </div>
    )
  }
}

export default HogsList
