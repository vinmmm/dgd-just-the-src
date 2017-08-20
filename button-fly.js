import React, { Component } from 'react';
class ButtonFly extends Component {
   onClick(e){
console.log("daniel's greatful dead")
  }


  render() {
    return (
      <div>

        <button onClick={this.onClick} type={this.props.behavior}>{this.props.children} </button>

      </div>
    )
  }

};

export default ButtonFly;
            
/*
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
*/