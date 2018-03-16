import React from 'react';

const HogCard = (props) => {
  const {name, specialty, greased, weight_ratio, highest_medal } = props.hogInfo
return (
	<div className="ui eight wide column">
		<div className="ui card">
			<div className="image">
				<img
					src={require(`../hog-imgs/${name
						.toLowerCase()
						.replace(/ /g, "_")}.jpg`)}
				  alt="this is some pig!"
        />
			</div>
			<div className="content">
				<p className="header">{name}</p>
        {(props.details === true) ?
  				<div className="description">
  					<p>Specialty: {specialty}</p>
  					<p>{ greased ? "Greased" : "Not Greased"}</p>
  					<p>Weight Ratio to Fridge: {weight_ratio}</p>
  					<p>Highest Medal Achieved: {highest_medal}</p>
            <button className="ui button" onClick={() => props.handleHideHogDetails(props.hogInfo)}>Hide Details</button>
  				</div>
        :
        <div className="description">
          <button className="ui button" onClick={() => props.handleShowHogDetails(props.hogInfo)}>See Details</button>
        </div>
        }
			</div>
			<div
				className="ui bottom attached button"
				onClick={() => props.handleHideHog(props.hogInfo)}>
				Hide Hog
			</div>
		</div>
	</div>
);
}

export default HogCard;
