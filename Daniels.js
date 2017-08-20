import React, { Component, PropTypes } from 'react';
import List from './DanielsList';

class Daniels extends Component { render(){
return (
<div className="app">
<List id='todo' title="Transylvania (todo)" taskCallbacks={this.props.taskCallbacks} cards={ this.props.cards.filter((card) => card.status === "todo")
} />
<List id='in-progress' title="Buncombe (In Progress)" taskCallbacks={this.props.taskCallbacks} cards={ this.props.cards.filter((card) => card.status === "in-progress")
} />
<List id='done' title= "New Hanover (Done)" taskCallbacks={this.props.taskCallbacks} cards={ this.props.cards.filter((card) => card.status === "done")
} /> 
</div> );
} }

Daniels.propTypes = {
cards: PropTypes.arrayOf(PropTypes.object), 
taskCallbacks: PropTypes.object
}
export default Daniels;