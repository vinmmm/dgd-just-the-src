import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class DeadHead extends React.Component {

  render() {
    var word = this.props.word;
    var wordElement = (<h1 key={word}>{word}</h1>);
    return (<div className="badge">
        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>  
  			  {wordElement}
        </CSSTransitionGroup>
    </div>)
  }

};

export default DeadHead;