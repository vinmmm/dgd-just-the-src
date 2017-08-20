import React, { Component } from 'react';
import CheckList from './CheckList';
//Setting State
//A new state can be set at any time
//If you want the component to have an initial state, you can set it on the class constructor. 
//Here were adding a constructor function to define a new key called showDetails in the component’s state
class Card extends Component { 
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    };
}

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }
	
	render() {

let cardDetails;
if (this.state.showDetails) { cardDetails = (
<div className="card__details">
{this.props.description}
<CheckList cardId={this.props.id} 
		   tasks={this.props.tasks}
		   taskCallbacks={this.props.taskCallbacks} />
</div> );
};

// Using the JavaScript ! (not) operator to toggle the Boolean property showDetails
// also use the ternary form to add a className conditionally to the Card Title 

let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };


    return (
<div className="card">
<div className={
this.state.showDetails? "card__title card__title--is-open" : "card__title"
} onClick={ ()=>this.setState({showDetails: !this.state.showDetails})
}>{this.props.title}</div>
{cardDetails} </div>
); 
}

}

Card.propTypes = {
id: PropTypes.number,
title: titlePropType, 
description: PropTypes.string, 

tasks: PropTypes.array, 
taskCallbacks: PropTypes.object,
}
export default Card;