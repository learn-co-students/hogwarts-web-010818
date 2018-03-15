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
    const details = <div>
      <p>{this.props.hog.specialty}</p>
      <p>{this.props.hog.greased ? 'greased' : 'not greased'}</p>
      <p>{this.props.hog['highest medal achieved']}</p>
      <p>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
    </div>
    return (
      <div onClick={this.toggleDetails}>
        <img src={require(`../hog-imgs/${img_path}.jpg`)}></img>
        <h1>{this.props.hog.name}</h1>
        {this.state.clicked ? details : null}
      </div>
    )
  }
}

export default HogCard
