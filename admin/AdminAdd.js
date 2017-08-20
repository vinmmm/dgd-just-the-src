import React, {Component} from 'react';


class AdminAdd extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		
		}
		this.handleName = this.handleName.bind(this)
	}
	
handleName(e) {
	this.setState({
		name: e.target.value
	})
}

handleClick(e) {
	let newResource = {
		name: this.state.name
	}
	this.props.addResource(newResource)
}

	render() {
		
		return (
			<div>
			<p>Add New Resource</p>

			<button onClick={this.props.addNewResource}>Add</button>
			<input onChange={this.handleName} value={this.state.name} />
			<p>Value of input: {this.state.name}</p>
			</div>
			
	
			);
	}




}


export default AdminAdd;