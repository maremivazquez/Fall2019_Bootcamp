import React from 'react'

class RemoveBuilding extends React.Component{	

	constructor () {
		super();
		this.state = {
				formControls: {
						removeCode:{
							value:''
						}
				}
		}
	}
	removeBuilding(){
		this.props.removeBuilding(this.state.formControls.removeCode.value);
		this.setState({
				formControls: {
						removeCode:{
							value:''
						}
				}
		});
	}

	changeText = event => {
			const name = event.target.name;
			const value = event.target.value;
			this.setState({
				formControls: {
						...this.state.formControls,
						[name]: {
							...this.state.formControls[name],
							value
						}
				}
			});
		}

	TextInput = (props) => {
		return (
			<div className="form-group">
				<label forhtml={props.id}>{props.label}</label>	
					<input type="email" className="form-control" onChange={this.changeText} {...props} />	
			</div>
		);
	}
	render() {
		return(
			<div>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#removeModal">
					Remove Building
				</button>
				<div className="modal fade" id="removeModal" tabIndex="-1" role="dialog" aria-labelledby="removeModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="removeModalLabel">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
			<form>
					<this.TextInput
						id="input1" 
						label="Building Code:"
						placeholder="Code of building to Remove"
						name="removeCode"
						value={this.state.formControls.removeCode.value}
					/>
			</form>
							</div>
							<div className="modal-footer">
				<button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.removeBuilding.bind(this)}>Submit</button>
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default RemoveBuilding;
