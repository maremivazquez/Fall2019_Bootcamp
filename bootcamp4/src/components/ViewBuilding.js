import React from 'react';

class ViewBuilding extends React.Component {
	render() {
	const {data, selectedBuilding} = this.props;
	//console.log('my data:', data[selectedBuilding])
	const {id, code, name, coordinates, address} = data[selectedBuilding];
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<ul>
					<li>Id: {id}</li>
					<li>Code: {code}</li>	
					<li>Name: {name}</li>
					<li>Address: {address}</li>
				</ul>
			</div>
		);
	}
}
export default ViewBuilding;
