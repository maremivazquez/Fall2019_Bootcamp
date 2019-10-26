import React from 'react';

class ViewBuilding extends React.Component {
	render() {
	const {data, selectedBuilding} = this.props;
	//console.log('my selectedBuilding:', selectedBuilding-1);
	//console.log('my data:', data);
	const result = data.find(o => o.id === selectedBuilding );
	const {id, code, name, address} = result;
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
<div className="card border-info mb-3">
  <div className="card-header">
    Building Code: <b>{code}</b>
  </div>
  <div className="card-body">
    <h4 className="card-title">{name}</h4>
    <p className="card-text">
			<u>Address:</u> <var>{address}</var>
		</p>
    <p>id:{id}</p>
  </div>
</div>
			</div>
		);
	}
}
export default ViewBuilding;
