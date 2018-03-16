import React from "react";
import hogs from "../porkers_data";
import HogCard from "./HogCard";
import uuid from "uuid";

export default class HogContainer extends React.Component {
  state = {
    hiddenHogs: [],
    hogsWithDetails: []
  };

  filterHogs = () => {
    if (this.props.filter === "greased") {
      return hogs.filter((hog) => {
        return hog.greased === true;
      });
    } else if (this.props.filter === "name") {
      return hogs.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else {
      return hogs.sort((a, b) => a[this.props.filter] - b[this.props.filter]);
    }
  };

  hideHog = (hog) => {
    let newArray = [...this.state.hiddenHogs, hog]
    this.setState({
      hiddenHogs: newArray
    });
  };

  showDetails = (hog) => {
    console.log("show details")
    let newArray = [...this.state.hogsWithDetails, hog]
    this.setState({
      hogsWithDetails: newArray
    }, () => console.log(this.state.hogsWithDetails[0]));
  }

  hideDetails = (hog) => {
    console.log("show details")
    let newArray = this.state.hogsWithDetails.filter((hiddenHog) => hiddenHog !== hog)
    this.setState({
      hogsWithDetails: newArray
    }, () => console.log(this.state.hogsWithDetails[0]));
  }

  render() {
    const unhiddenHogs = this.filterHogs().filter((hog) => !this.state.hiddenHogs.includes(hog))
    const hogCards = unhiddenHogs.map((hog) => {
      return (
        (this.state.hogsWithDetails.includes(hog)) ?
        <HogCard  key={uuid()}
                  hogInfo={hog}
                  details={true}
                  handleShowHogDetails={this.showDetails}
                  handleHideHogDetails={this.hideDetails}
                  handleHideHog={this.hideHog} />
        : <HogCard  key={uuid()}
                    hogInfo={hog}
                    details={false}
                    handleShowHogDetails={this.showDetails}
                    handleHideHogDetails={this.hideDetails}
                    handleHideHog={this.hideHog} />
    );
  });
  return <div className="ui grid container">{hogCards}</div>;
  }
}
