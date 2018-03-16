import React from "react";
import hogs from "../porkers_data";
import HogCard from "./HogCard";
import uuid from "uuid";
const URL = 'https://api.giphy.com/v1/gifs/search?api_key=7U850NiREV7w7ayJzMJqhedCW3swkqlc&q=pigs&limit=13&offset=0&rating=G&lang=en'

export default class HogContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenHogs: [],
      hogsWithDetails: [],
      hogsWithGifs: []
    };

    this.fetchGifs()
  }

  fetchGifs = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        // add gifs to hog hogInfo
        const addedGifs = hogs.map((hog, index) => {
          return Object.assign({}, hog, {gif: json.data[index].images.fixed_height.url})
        })
        this.setState({ hogsWithGifs: addedGifs })
      })
  }

  filterHogs = () => {
    if (this.props.filter === "greased") {
      return this.state.hogsWithGifs.filter((hog) => {
        return hog.greased === true;
      });
    } else if (this.props.filter === "name") {
      return this.state.hogsWithGifs.sort((a, b) => {
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
      return this.state.hogsWithGifs.sort((a, b) => a[this.props.filter] - b[this.props.filter]);
    }
  };

  hideHog = (hog) => {
    let newArray = [...this.state.hiddenHogs, hog]
    this.setState({
      hiddenHogs: newArray
    });
  };

  showDetails = (hog) => {
    let newArray = [...this.state.hogsWithDetails, hog]
    this.setState({
      hogsWithDetails: newArray
    });
  }

  hideDetails = (hog) => {
    let newArray = this.state.hogsWithDetails.filter((hiddenHog) => hiddenHog !== hog)
    this.setState({
      hogsWithDetails: newArray
    });
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
                  handleHideHog={this.hideHog}  />
        : <HogCard  key={uuid()}
                    hogInfo={hog}
                    details={false}
                    handleShowHogDetails={this.showDetails}
                    handleHideHogDetails={this.hideDetails}
                    handleHideHog={this.hideHog}  />
    );
  });
    return <div className="ui grid container">{hogCards}</div>;
  }
}
