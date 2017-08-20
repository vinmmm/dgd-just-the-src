import * as React from 'react';


class CreateForm extends React.Component {
	//Storing the initial state with a constructor
	//Storing the value of each form field which will initally be an empty string
	//Then add a vale to each input for the appropiate property of the state
	constructor() {
		super()

		this.state = {
			id: new Date().getTime(),
			name: '',
			specifics: '',
			instructions: '',
			create: false //this boolean exists for showing the user a message after the form is submitted
		};
	}

	//Below are event handlers to handle the change in state when text is enetred into the forms
	//The target property of the evnt refers to the inpu node itself
	handleChangeName(event) {
		this.setState({ name: event.target.value });
	}

	handleChangeSpecifics(event) {
		this.setState({ specifics: event.target.value });
	}

	handleChangeInstructions(event) {
		this.setState({ instructions: event.target.value });
	}
//Handling the submit event
	handleSubmit(event) {
		event.preventDefault(); // calling prvent default to prevent the form's default submit action which would cause the page to reload
//Again avoiding using this.state for every value input with es6 desructured cont
		const { name, specifics, instructions } = this.state;
		this.props.onSubmit(name, specifics, instructions);
		//calling the resetForm method here in the handleSubmit method
		this.resetForm();
		//this setStae here is for showing the user a message after the form has been submitted
		this.setState({ created: true});
		//the ref and focus method is for refocising the curor to the name field after the form has submitted
		this.refs.name.focus();
	}
//Because we control our form inputs through our component state this is all we have to do to reset the forms
//Createing a method here to reset the forms after submit
//This will reset the strings when this method is called from the handle submit method
resetForm() {
	this.setState({
		name: '',
		specifics: '',
		instructions: ''
	});
}
	render () {
		//Avoiding using this.state with es6 desructured cont
		const { name, specifics, instructions, created} = this.state;
		return (
		<form onSubmit={this.handleSubmit.bind(this)}>
		{ created && <div className='alert alert-success'>Your resource was created</div> }
		 <div>
		 <label htmlFor='name'>Resource name:</label>
		 <input
		 type='text'
		 className='form-control'
		 id='name'
		 placeholder='Enter resource name'
		 value={name}
		 onChange={this.handleChangeName.bind(this)}
		 ref='name' //this ref is here to make the cursor refocus on the name input field after the form has been submitted

		 />
		 </div>

		 <div className='form-group'>
		  <label htmlFor='specifics'>Resource name:</label>
		 <textarea
		 type='text'
		 className='form-control'
		 id='specifics'
		 rows='5'
		 placeholder='Enter resource specifics'
		 value={specifics}
		 onChange={this.handleChangeSpecifics.bind(this)}

		 />
		 </div>

		  <div className='form-group'>
		  <label htmlFor='instructions'>Instructions:</label>
		 <textarea
		 type='text'
		 className='form-control'
		 rows='10'
		 id='instructions'
		 placeholder='Enter resource instructions'
		 value={instructions}
		 onChange={this.handleChangeInstructions.bind(this)}
		 />
		 </div>

		 <input className='btn btn-default' type='submit' value='Create' />
		</form>

	);
}

}

//We need a a prop call onSubmit and its required and not optional to we use React Proptypes here
// There are proptypes to decribe all the various types suported by react
//You can also create custom props
CreateForm.propTypes = {
	onSubmit: React.PropTypes.func.isRequired
};

export default CreateForm;