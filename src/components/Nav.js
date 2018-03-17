import piggy from '../porco.png';
import React from 'react';

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <select className="ui dropdown" onChange={props.filter}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Weight</option>
        <option value="greased">Greased</option>
      </select>
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  )
}

export default Nav;
