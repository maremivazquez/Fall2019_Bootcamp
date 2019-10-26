import React from 'react'

class AddBuilding extends React.Component{
	constructor () {
		super();
		this.state = {
				formControls: {
						code:{
							value: ''
						},
						name:{
							value:''
						},
						coordinate:{
							latitude:'',
							longitude:'',
						},
						address:{
							value:''
						}
				}
		}
	}

	addBuilding(){
		this.props.addBuilding(this.state.formControls);
		this.setState({
				formControls: {
						code:{
							value: ''
						},
						name:{
							value:''
						},
						coordinate:{
							latitude:'',
							longitude:'',
						},
						address:{
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
				<label forhtml={props.id}>{props.placeholder}</label>	
					<input type="email" className="form-control" onChange={this.changeText} {...props} />	
			</div>
		);
	}
	render() {
		return(
			<div>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
					Add Building
				</button>
				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
			<form>
					<this.TextInput
						id="input1" 
						placeholder="Code"
						name="code"
						value={this.state.formControls.code.value}
					/>
					<this.TextInput
						id="input2" 
						placeholder="Name"
						name="name"
						value={this.state.formControls.name.value}
					/>
					<this.TextInput
						id="input3" 
						placeholder="Address"
						name="address"
						value={this.state.formControls.address.value}
					/>
			</form>
							</div>
							<div className="modal-footer">
				<button type="submit" className="btn btn-primary" data-dismiss="modal" Click={this.addBuilding.bind(this)}>Submit</button>
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AddBuilding;
