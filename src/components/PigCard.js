import React from 'react';

export default class PigCard extends React.Component {
  state = { clicked: false}

  showMore = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  additionalInfo = () => {
    const ratio = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return (
      <div>
        <div className="description">Specialty: {this.props.info.specialty}</div>
        <div className="description">Greased: {this.props.info.greased ? 'true' : 'false'}</div>
        <div className="description">Ratio: {this.props.info[ratio]}</div>
        <div className="description">Highest Medal Acheived: {this.props.info['highest medal achieved']}</div>
      </div>
    )
  }

  img = () => {
    return require(`../hog-imgs/${this.props.info.name.toLowerCase().split(' ').join('_')}.jpg`);
  }

  render() {
    return(
      <div className="ui eight wide column">
        <div className="ui link cards" onClick={this.showMore}>
          <div className="card">
            <div className="header"><h1>{this.props.info.name}</h1></div>
            <img src={this.img()} alt={this.props.info.name} />
            <div>{ this.state.clicked ? this.additionalInfo() : null }</div>
          </div>
        </div>
      </div>
    )
  }
};
