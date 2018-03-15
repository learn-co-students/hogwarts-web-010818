import React, { Component } from 'react';
import augustus from '../hog-imgs/augustus_gloop.jpg';
import bay from '../hog-imgs/bay_of_pigs.jpg';
import cherub from '../hog-imgs/cherub.jpg';
import galaxy from '../hog-imgs/galaxy_note.jpg';
import leggo from '../hog-imgs/leggo_my_eggo.jpg';
import mudblood from '../hog-imgs/mudblood.jpg';
import piggy from '../hog-imgs/piggy_smalls.jpg';
import porkchop from '../hog-imgs/porkchop.jpg';
import rainbowdash from '../hog-imgs/rainbowdash.jpg';
import sobriety from '../hog-imgs/sobriety.jpg';
import prosciutto from '../hog-imgs/the_prosciutto_concern.jpg';
import trouble from '../hog-imgs/trouble.jpg';
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg';

let imgMapper = {
    "Augustus Gloop" : augustus,
    'Bay of Pigs': bay,
    "Cherub": cherub,
    'Galaxy Note': galaxy,
    'Leggo My Eggo': leggo,
    'Mudblood': mudblood,
    'Piggy smalls': piggy,
    'Porkchop': porkchop,
    'Rainbowdash': rainbowdash,
    'Sobriety': sobriety,
    'The Prosciutto Concern': prosciutto,
    'Trouble': trouble,
    'TruffleShuffle': truffleshuffle
}

class Hog extends Component {

  state = {
    clicked: false,
    hidden: false
  }

  handleImgClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleButtonClick = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }


  findHogImage = () => {
    for(let k in imgMapper) {
      if (k === this.props.hogAttributes.name) {
        return imgMapper[k]
      }
    }
  }

  render() {
    let ratio = this.props.hogAttributes['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    let highestMetal = this.props.hogAttributes['highest medal achieved']
    const {name,
          specialty,
          greased
          } = this.props.hogAttributes
    return (
      <div className="pigTile">
        <button onClick={this.handleButtonClick}>Hide</button>
        {!this.state.hidden ? (
          <div>
            <p className="smallHeader">{name}</p>
            <img onClick={this.handleImgClick} src={this.findHogImage()} alt={name}/>
            {this.state.clicked ? (
              <div>
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased ? "yes" : "no"}</p>
                <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {ratio}</p>
                <p>highest medal achieved: {highestMetal}</p>
              </div>
            ): null}
          </div>

        ):null}

      </div>
    )
  }
}

export default Hog
