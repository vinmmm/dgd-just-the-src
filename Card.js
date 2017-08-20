import React, { Component } from 'react';
import CheckList from './CheckList';
import CountyResource from './county/CountyResource';

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
	render() {

let cardDetails;
if (this.state.showDetails) { cardDetails = (
<div className="card__details">
{this.props.description}
<CheckList cardId={this.props.id} tasks={this.props.tasks} />
<CountyResource color="red" />
</div> );
};

// Using the JavaScript ! (not) operator to toggle the Boolean property showDetails
// also use the ternary form to add a className conditionally to the Card Title 
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
export default Card;