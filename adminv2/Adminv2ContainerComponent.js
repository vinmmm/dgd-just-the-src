import React, { Component } from 'react';
import ResourceList from './ResourceList';
import ResourceDetail from './ResourceDetail';
import CreateForm from './CreateForm';
import 'bootstrap/dist/css/bootstrap.css'




//stores resources in an array in the app state
class Adminv2ContainerComponent extends Component {
	constructor() {
		super();

		this.state = {
			showCreate: false,
			resources: [], //this is the array property in the app state that stores the resources
			selectedResource: null //A new state property is added here to keep track of selected resource
		};
	}
//This is a method with a booolean to show the form...is the butoon's onClick handler
 showCreate() {
 	this.setState({ showCreate: true });
 }

 //This is the event handler for the onSubmit prop
 //This handleCreateResource method adds the name, specifics and resource to the resources array in the app state
 handleCreateResource(name, specifics, instructions) {
 	//console.log(name, specifics, instructions);
//using the concat method of this.state.resources to not mutate the state directly but to create a new array with the resource object added to the end
 	//Always operate on the state immutyably. Mutating the state directly can cause hard to track down bugs as React relys on setState to inform it when changes occur
 	const newResources = this.state.resources.concat({ 
 		//the variables and the keys are the same name and es6 assumes you will want the variable that matches the key so you dont need both or the colon
 		 name,
 		 specifics,
 		 instructions
 	});

 	this.setState({
 		resources: newResources
 	});
 }

 handleSelectResource(resource) {
 	this.setState({
 		selectedResource: resource,
 		showCreate: false
 	});
 }
	
	render() {
		
		return (
			
			<div className='container'>
			<h1>Hi, I'm the Adminv2ContainerComponent Component</h1>
			<h3>This is the Resource Database</h3>
			

			 <div className='row'>
			   <div className='col-xs-4'>
			   <button 
			   type='button'
			   className='btn btn-primary'
			   style={{
			   	width: '100%',
			   	marginBottom: '5px'
			   }}
			   onClick={this.showCreate.bind(this)}
			   >
			   Create new resource
			   </button>
			   <ResourceList resources={this.state.resources} 
							 onSelectResource={this.handleSelectResource.bind(this)}			   														


			   /> 
			   </div>
			   <div className='col-xs-8'>
			  { this.state.showCreate 
			  	? <CreateForm onSubmit={this.handleCreateResource.bind(this)}/> 
			  	: <ResourceDetail resource={this.state.selectedResource} /> } 
			   </div>

			
             </div>

		</div>
			
			);
	}
}





export default Adminv2ContainerComponent;