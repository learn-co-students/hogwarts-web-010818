import React, { Component } from 'react';
import Hog from '../components/Hog'
import hogs from '../porkers_data'
import uuid from "uuid"



class HogsContainer extends Component {
  state = {
    hogs: hogs,
    filters: {name: "", weight: "", greased:""} //check what app's filters prop is because name is undefined
  }


  handleSort = (event) => {
    if (event.target.value === "") {
      this.setState({
        filters : {...this.state.filters, [event.target.name]:event.target.value}
      })
    }
    // else {
    //   this.setState({
    //     filters : {...this.state.filters, [event.target.name]:event.target.value}
    //   })
    // }
    // else if (event.target.id === "sortByName"){
    //   this.setState({
    //     filters:{...this.state.filters, name:event.target.value}
    //   });
    // }
    // else if ((event.target.id === "sortByWeight")){
    //   this.setState({
    //     filters:{...this.state.filters, weight:event.target.value}
    //   });
    // }
    // else if(event.target.id === "filterByGreased"){
    //   if(event.target.value === "true"){
    //     this.setState({
    //       filters:{...this.state.filters, greased:true}
    //     })
    //   }
    //   else if(event.target.value === "false") {
    //     this.setState({
    //       filters:{...this.state.filters, greased:false}
    //     })
    //   }
    // }
  }



  render() {

    let filteredHogs = () => {
      if (this.state.filters.greased === ""){
        console.log(this.state.filters)
        return this.state.hogs
      }
      else{
        return this.state.hogs.filter(hog => {
          return hog.greased === this.state.filters.greased
        })
      }
    }


    let sortedHogs = (listOfFilteredHogsByGrease) => {
      if (this.state.filters.name  === "" && this.state.filters.weight ===""){
        return listOfFilteredHogsByGrease
      }
      let sortedHogs = []
      if(this.state.filters.name == "A-Z"){
         return listOfFilteredHogsByGrease.sort(function(a, b) {
          let nameA = a.name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
            return 0;
        });
      }
      else if(this.state.filters.name === "Z-A"){
        return listOfFilteredHogsByGrease.sort(function(a, b) {
         let nameA = a.name.toUpperCase(); // ignore upper and lowercase
         let nameB = b.name.toUpperCase(); // ignore upper and lowercase
         if (nameA > nameB) {
           return -1;
         }
         if (nameA < nameB) {
           return 1;
         }

           return 0;
       });

      }

      if(this.state.filters.weight === "Ascending"){
        return listOfFilteredHogsByGrease.sort(function (a, b) {
          return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
        });

      }
      else if(this.state.filters.weight === "Descending"){
        return listOfFilteredHogsByGrease.sort(function (a, b) {
          return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
        });
      }

      // if(this.state.filters.greased == "true")
        //this is where greased or not should go
    }
    return (
      <div className="indexWrapper">
        <div>
          <select name="greased" id="filterByGreased" onChange={this.handleSort}>
            <option value=""> Is the Hog Greased? </option>
            <option value="true"> Yes! </option>
            <option value="false"> No! </option>
          </select>
          <select name="name" id="sortByName" onChange={this.handleSort}>
            <option value=""> Sort By Name </option>
            <option value="A-Z"> A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <select name="weight" id="sortByWeight" onChange={this.handleSort}>
            <option value=""> Sort By Weight </option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
        {sortedHogs(filteredHogs()).map((hog) => <Hog hogAttributes={hog}/>)}
      </div>
    )
  }
}

export default HogsContainer
