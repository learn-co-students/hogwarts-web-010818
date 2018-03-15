import React, { Component } from 'react';

console.log(this)


class HogCard extends Component {
  state = {
    clicked:false
  }

  toggleDetails = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const img_path = this.props.hog.name.toLowerCase().replace(/ /g,"_");
    const details = <div className="extra content">
      <p>Specialty: {this.props.hog.specialty}</p>
      <p>{this.props.hog.greased ? 'greased' : 'not greased'}</p>
      <p>Highest meda: {this.props.hog['highest medal achieved']}</p>
      <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
    </div>
    return (
      <div onClick={this.toggleDetails} className="card">
        <div className="image">
          <img src={require(`../hog-imgs/${img_path}.jpg`)}></img>
        </div>
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
        </div>
        {this.state.clicked ? details : null}
      </div>
    )
  }
}

export default HogCard
