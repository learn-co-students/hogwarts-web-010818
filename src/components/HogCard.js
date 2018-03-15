import React from 'react';

const HogCard = (props) => {
  const {name, specialty, greased, weight_ratio, highest_medal, img_src} = props.hogInfo
  return (<div className="ui eight wide column">
            <div className="ui card">
              <div className="image">
                <img src={require(`../hog-imgs/${name.toLowerCase().replace(/ /g,"_")}.jpg`)} />
              </div>
              <div className="content">
                <p className="header">{ name }</p>
                <div className="description">
                  <p>Specialty: { specialty }</p>
                  <p>Greased: { greased }</p>
                  <p>Weight Ratio to Fridge: { weight_ratio }</p>
                  <p>Highest Medal Achieved: { highest_medal }</p>
                </div>
              </div>
            </div>
          </div>
        )
  }

  export default HogCard;
