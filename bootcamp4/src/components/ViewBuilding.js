import React from 'react';

class ViewBuilding extends React.Component {
	render() {
	const {data, selectedBuilding} = this.props;
	//console.log('my selectedBuilding:', selectedBuilding-1);
	//console.log('my data:', data);
	const {id, code, name, address} = data[selectedBuilding-1];
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
